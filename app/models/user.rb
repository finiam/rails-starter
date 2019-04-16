class User < ApplicationRecord
  validates :email, uniqueness: true
  validates :email, :encrypted_password, presence: true

  enum role: {
    user: "user",
    admin: "admin"
  }

  include Clearance::User

  def self.authenticate(email, password)
    user = find_by(email: email)

    return nil if user.nil? || !user.authenticated?(password)

    user
  end
end
