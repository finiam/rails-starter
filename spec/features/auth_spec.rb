require "rails_helper"

RSpec.describe "Authentication flow", js: true do
  it "logins with correct credentials" do
    user = create(:user)
    visit "/"

    fill_in("email", with: user.email)
    fill_in("password", with: "foobar")
    click_on("Sign In")

    expect(page).to have_content("Wow, an Async Component")
  end

  it "does not login with bad credentials" do
    user = create(:user)
    visit "/"

    fill_in("email", with: user.email)
    fill_in("password", with: "badpassword")
    click_on("Sign In")

    expect(page).to_not have_content("Wow, an Async Component")
  end

  it "uses the user identifier to login" do
    user = create(:user)
    visit "/?as=#{user.id}"

    expect(page).to have_content("Wow, an Async Component")
  end

  it "renders the user's name" do
    user = create(:user)
    visit "/?as=#{user.id}"

    expect(page).to have_content(user.name)
  end
end
