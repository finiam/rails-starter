class ApplicationController < ActionController::Base
  include Clearance::Controller

  protect_from_forgery with: :exception

  private

  def require_login
    return if current_user

    head :unauthorized
  end
end
