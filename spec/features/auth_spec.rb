require "rails_helper"

RSpec.describe "Authentication flow", js: true do
  it "logins with correct credentials" do
    user = create(:user)

    visit "/login"
    fill_in("email", with: user.email)
    fill_in("password", with: "foobar")
    click_on("Sign In")

    expect(page).to have_content("Wow, an Async Component")
  end

  it "does not login with bad credentials" do
    user = create(:user)

    visit "/login"
    fill_in("email", with: user.email)
    fill_in("password", with: "badpassword")
    click_on("Sign In")

    expect(page).to_not have_content("Wow, an Async Component")
  end

  it "correctly renders the homepage" do
    user = create(:user)

    login_user(user)
    visit "/"

    expect(page).to have_content("Wow, an Async Component")
  end

  it "renders the user's name if authenticated" do
    user = create(:user)

    login_user(user)
    visit "/"

    expect(page).to have_content(user.name)
  end

  it "renders the logout button if authenticated" do
    user = create(:user)

    login_user(user)
    visit "/"

    expect(page).to have_content("Logout")
  end

  it "does not renders the logout button if not authenticated" do
    visit "/"

    expect(page).to_not have_content("Logout")
  end

  it "renders the admin area link if the user is an admin" do
    user = create(:user, role: :admin)

    login_user(user)
    visit "/"

    expect(page).to have_content("Admin Area")
  end

  it "does not render the admin area link if the user is an admin" do
    user = create(:user)

    login_user(user)
    visit "/"

    expect(page).to_not have_content("Admin Area")
  end
end
