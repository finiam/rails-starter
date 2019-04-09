require "rails_helper"

RSpec.describe "Authentication flow", js: true do
  it "correctly logs in the user" do
    user = create(:user)
    visit "/"

    fill_in("email", with: user.email)
    fill_in("password", with: "foobar")
    click_on("Sign In")

    expect(page).to have_content("Wow, an Async Component")
  end

  it "correctly uses the login info" do
    user = create(:user)
    visit "/?as=#{user.id}"

    expect(page).to have_content("Wow, an Async Component")
  end
end
