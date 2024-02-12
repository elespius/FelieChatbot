class NotificationFinder
  attr_reader :current_user, :current_account, :params

  RESULTS_PER_PAGE = 15

  def initialize(current_user, current_account, params = {})
    @current_user = current_user
    @current_account = current_account
    @params = params
    set_up
  end

  def perform
    notifications
  end

  def unread_count
    @notifications.where(read_at: nil).count
  end

  def count
    @notifications.count
  end

  private

  def set_up
    find_all_notifications
    apply_filters
  end

  def find_all_notifications
    @notifications = current_user.notifications.where(account_id: @current_account.id)
  end

  def apply_filters
    status = params[:status]
    type = params[:type]
    # Return all the notifications including read, unread, and snoozed.
    return if status == 'snoozed' && type == 'read'

    # Return only read and unread notifications, and do not display snoozed notifications
    if type == 'read'
      exclude_snoozed_notifications
    # Return only snoozed and unread notifications, and do not display read notifications
    elsif status == 'snoozed'
      exclude_read_notifications
    else
      # Default case: return all the unread notifications
      include_unread_notifications
    end
  end

  def exclude_snoozed_notifications
    @notifications = @notifications.where(snoozed_until: nil)
  end

  def exclude_read_notifications
    @notifications = @notifications.where(read_at: nil)
  end

  def include_unread_notifications
    @notifications = @notifications.where('snoozed_until IS NULL AND read_at IS NULL')
  end

  def current_page
    params[:page] || 1
  end

  def notifications
    @notifications.page(current_page).per(RESULTS_PER_PAGE).order(last_activity_at: params[:sort_order] || :desc)
  end
end
