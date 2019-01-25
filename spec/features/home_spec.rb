require "rails_helper"

describe "Home page", js: true do
  it "renders hello world" do
    visit "/"

    expect(page).to have_content("Hello World!")
  end
end
