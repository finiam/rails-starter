class HomeController < ApplicationController
  def index
    @user = current_user.as_json.deep_transform_keys! { |key| key.camelize(:lower) }.slice("name", "email", "role") if current_user
  end
end
