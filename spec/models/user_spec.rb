require "rails_helper"

RSpec.describe User, type: :model do
  describe "attribute validation" do
    it { should validate_presence_of(:name) }

    it { should validate_presence_of(:email) }

    it { should validate_presence_of(:encrypted_password) }

    it "should be invalid if password confirmation doesn't match" do
      user = build(:user, password_confirmation: "not_foobar")

      expect(user).to be_invalid
    end

    it "should be valid if password confirmation matches" do
      user = build(:user)

      expect(user).to be_valid
    end
  end
end
