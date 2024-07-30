class TicketPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    true
  end

  def assign?
    true
  end

  def resolve?
    true
  end

  def update?
    true
  end

  def destroy?
    @account_user.administrator? || @account_user.supervisor?
  end
end
