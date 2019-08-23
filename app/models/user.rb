class User < ApplicationRecord
  include Clearance::User
  validates :email, presence: true, uniqueness: true
  validates :encrypted_password, :name, presence: true
  validate :validate_password_confirmation

  enum role: {
    user: "user",
    admin: "admin"
  }

  def self.authenticate(email, password)
    user = find_by(email: email)

    return nil if user.nil? || !user.authenticated?(password)

    user
  end

  attr_accessor :password_confirmation

  private

  def validate_password_confirmation
    errors.add(:password, "must match password_confirmation") unless password == password_confirmation
  end
end
