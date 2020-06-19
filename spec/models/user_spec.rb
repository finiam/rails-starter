require "rails_helper"

RSpec.describe User, type: :model do
  describe "attribute validation" do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }

    it "invalidates users with bad password confirmations" do
      user = build(:user, password_confirmation: "not_foobar")

      expect(user).to be_invalid
    end

    it "validates users with good password confirmations" do
      user = build(:user)

      expect(user).to be_valid
    end
  end
end
