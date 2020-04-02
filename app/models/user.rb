class User < ApplicationRecord
  authenticates_with_sorcery!

  validates :email,
            presence: true,
            uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true
  validate :validate_password_confirmation

  enum role: {
    user: "user",
    admin: "admin"
  }

  attr_accessor :password_confirmation

  private

  def validate_password_confirmation
    errors.add(:password, "must match password_confirmation") unless password == password_confirmation
  end
end
