require "rails_helper"

RSpec.describe Admin::UsersController, type: :controller do
  describe "GET #index" do
    it "renders admin dashboard if user is admin" do
      user = create(:user, role: :admin)

      login_user(user)
      get :index

      expect(response).to have_http_status(:ok)
    end

    it "returns not found status if user is not admin" do
      user = create(:user)

      login_user(user)
      get :index

      expect(response).to have_http_status(:not_found)
    end
  end
end
