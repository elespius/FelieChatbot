module Enterprise::Concerns::User
  extend ActiveSupport::Concern

  included do
    validate :ensure_installation_pricing_plan_quantity
  end

  def ensure_installation_pricing_plan_quantity
    return unless ChatwootHub.pricing_plan == 'premium'

    errors.add(:base, 'User limit reached. Please purchase more licenses from super admin') if User.count >= ChatwootHub.pricing_plan_quantity
  end
end
