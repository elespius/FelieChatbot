class Integrations::Slack::IncomingMessageBuilder
  include Integrations::Slack::SlackMessageHelper
  include Integrations::Slack::LinkUnfurlHelper

  attr_reader :params

  SUPPORTED_EVENT_TYPES = %w[event_callback url_verification].freeze
  SUPPORTED_EVENTS = %w[message link_shared].freeze
  SUPPORTED_MESSAGE_TYPES = %w[rich_text].freeze

  def initialize(params)
    @params = params
  end

  def perform
    return unless valid_event?

    if hook_verification?
      verify_hook
    elsif create_message?
      create_message
    elsif link_shared?
      unfurl_url
    end
  end

  private

  def valid_event?
    supported_event_type? && supported_event? && should_process_event?
  end

  def supported_event_type?
    SUPPORTED_EVENT_TYPES.include?(params[:type])
  end

  # Discard all the subtype of a message event
  # We are only considering the actual message sent by a Slack user
  # Any reactions or messages sent by the bot will be ignored.
  # https://api.slack.com/events/message#subtypes
  def should_process_event?
    return true if params[:type] != 'event_callback'

    params[:event][:user].present? && valid_event_subtype?
  end

  def valid_event_subtype?
    params[:event][:subtype].blank? || params[:event][:subtype] == 'file_share'
  end

  def supported_event?
    hook_verification? || SUPPORTED_EVENTS.include?(params[:event][:type])
  end

  def supported_message?
    if message.present?
      SUPPORTED_MESSAGE_TYPES.include?(message[:type]) && !attached_file_message?
    else
      params[:event][:files].present? && !attached_file_message?
    end
  end

  def hook_verification?
    params[:type] == 'url_verification'
  end

  def thread_timestamp_available?
    params[:event][:thread_ts].present?
  end

  def create_message?
    thread_timestamp_available? && supported_message? && integration_hook
  end

  def link_shared?
    params[:event][:type] == 'link_shared'
  end

  def unfurl_url
    conversation = conversation_from_params
    return unless conversation

    user_info = conntact_attributes(conversation).slice(:user_name, :email, :phone_number, :company_name)
    unfurls = generate_unfurls(conversation_url, user_info)

    send_unfurls(unfurls)
  end

  def conntact_attributes(conversation)
    contact = conversation.contact
    user_name = contact&.name.presence || '---'
    email = contact&.email.presence || '---'
    phone_number = contact&.phone_number.presence || '---'
    company_name = contact&.additional_attributes&.dig('company_name').presence || '---'

    {
      user_name: user_name,
      email: email,
      phone_number: phone_number,
      company_name: company_name
    }
  end

  def conversation_from_params
    conversation_id = extract_conversation_id(conversation_url)
    return unless conversation_id

    find_conversation_by_id(conversation_id)
  end

  def conversation_url
    params.dig(:event, :links, 0, :url)
  end

  def send_unfurls(unfurls)
    slack_service = Integrations::Slack::SendOnSlackService.new(message: nil, hook: integration_hook)
    slack_service.link_unfurl(
      unfurl_id: params.dig(:event, :unfurl_id),
      source: params.dig(:event, :source),
      unfurls: JSON.generate(unfurls)
    )
  end

  def message
    params[:event][:blocks]&.first
  end

  def verify_hook
    {
      challenge: params[:challenge]
    }
  end

  def integration_hook
    @integration_hook ||= Integrations::Hook.find_by(reference_id: params[:event][:channel])
  end

  def slack_client
    @slack_client ||= Slack::Web::Client.new(token: @integration_hook.access_token)
  end

  # Ignoring the changes added here https://github.com/chatwoot/chatwoot/blob/5b5a6d89c0cf7f3148a1439d6fcd847784a79b94/lib/integrations/slack/send_on_slack_service.rb#L69
  # This make sure 'Attached File!' comment is not visible on CW dashboard.
  # This is showing because of https://github.com/chatwoot/chatwoot/pull/4494/commits/07a1c0da1e522d76e37b5f0cecdb4613389ab9b6 change.
  # As now we consider the postback message with event[:files]
  def attached_file_message?
    params[:event][:text] == 'Attached File!'
  end
end
