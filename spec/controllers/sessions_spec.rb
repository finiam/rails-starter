require "rails_helper"

RSpec.describe SessionsController, type: :controller do
  describe "GET #show" do
    it "returns the currently logged in user" do
      user = create(:user)

      login_user(user)
      get :show

      expect(parsed_response[:id]).to eq(user.id)
      expect(parsed_response[:name]).to eq(user.name)
      expect(parsed_response[:email]).to eq(user.email)
      expect(parsed_response[:role]).to eq(user.role)
    end

    it "returns an not found response if there is no session" do
      get :show

      expect(response).to have_http_status(:not_found)
    end
  end

  describe "POST #create" do
    it "logins a user with correct credentials and returns it's info" do
      user = create(:user)

      post :create, params: { email: user.email, password: "foobar" }

      expect(parsed_response[:id]).to eq(user.id)
      expect(parsed_response[:name]).to eq(user.name)
      expect(parsed_response[:email]).to eq(user.email)
      expect(parsed_response[:role]).to eq(user.role)
    end

    it "logins a user with correct credentials and saves it in the session" do
      user = create(:user)

      post :create, params: { email: user.email, password: "foobar" }

      expect(session["user_id"]).to eq(user.id.to_s)
    end

    it "returns not found status if credentials are wrong" do
      user = create(:user)

      post :create, params: { email: user.email, password: "badpassword" }

      expect(response).to have_http_status(:not_found)
    end
  end

  describe "DELETE #destroy" do
    it "logs out the current user and returns ok" do
      user = create(:user)

      login_user(user)
      delete :destroy

      expect(response).to have_http_status(:ok)
    end

    it "logs out the current user by deleting the session" do
      user = create(:user)

      login_user(user)
      delete :destroy

      expect(session["user_id"]).to be_nil
    end
  end
end
