class ApplicationController < ActionController::Base
  include Clearance::Controller

  protect_from_forgery with: :exception
  before_action :require_login

  def authenticate(params)
    User.authenticate(params[:session][:email], params[:session][:password])
  end
end
