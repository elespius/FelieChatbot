class Api::V1::Accounts::Integrations::CaptainController < Api::V1::Accounts::BaseController
  before_action :check_admin_authorization?
  before_action :fetch_hook

  def sso_url
    sso_url = "#{ENV.fetch('CAPTAIN_APP_URL', '')}/sso?access_token=#{@hook['settings']['access_token']}" \
              "&email=#{@hook['settings']['account_email']}&account_id=#{@hook['settings']['account_id']}"
    render json: { sso_url: URI.encode_www_form_component(sso_url) }, status: :ok
  end

  private

  def fetch_hook
    @hook = Current.account.hooks.find_by!(app_id: 'captain')
  end
end
