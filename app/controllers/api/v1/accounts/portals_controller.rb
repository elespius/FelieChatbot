class Api::V1::Accounts::PortalsController < Api::V1::Accounts::BaseController
  before_action :fetch_portal, except: [:index, :create]
  before_action :check_authorization

  def index
    @portals = Current.account.portals
  end

  def add_members
    agents = Current.account.agents.where(id: portal_member_params[:member_ids])
    @portal.members << agents
  end

  def show; end

  def create
    @portal = Current.account.portals.create!(portal_params)
  end

  def update
    @portal.update!(portal_params)
  end

  def destroy
    @portal.destroy!
    head :ok
  end

  private

  def fetch_portal
    @portal = Current.account.portals.find_by(slug: permitted_params[:id])
  end

  def permitted_params
    params.permit(:id)
  end

  def portal_params
    params.require(:portal).permit(
      :account_id, :color, :custom_domain, :header_text, :homepage_link, :name, :page_title, :slug, :archived
    )
  end

  def portal_member_params
    params.require(:portal).permit(:account_id, member_ids: [])
  end
end
