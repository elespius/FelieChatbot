class HookJob < ApplicationJob
  queue_as :integrations

  def perform(hook, event_name, event_data = {})
    case hook.app_id
    when 'slack'
      process_slack_integration(hook, event_name, event_data)
    when 'dialogflow'
      process_dialogflow_integration(hook, event_name, event_data)
    when 'google_translate'
      google_translate_integration(hook, event_name, event_data)
    end
  rescue StandardError => e
    Rails.logger.error e
  end

  private

  def process_slack_integration(hook, event_name, event_data)
    return unless ['message.created'].include?(event_name)

    message = event_data[:message]
    Integrations::Slack::SendOnSlackService.new(message: message, hook: hook).perform
  end

  def process_dialogflow_integration(hook, event_name, event_data)
    return unless ['message.created', 'message.updated'].include?(event_name)

    Integrations::Dialogflow::ProcessorService.new(event_name: event_name, hook: hook, event_data: event_data).perform
  end

  def google_translate_integration(_hook, event_name, event_data)
    return unless ['message.created'].include?(event_name)

    message = event_data[:message]
    conversation = message.conversation

    Conversations::DetectLanguageJob.perform_later(message.id) if message.incoming? && conversation.messages.incoming.count == 1
  end
end
