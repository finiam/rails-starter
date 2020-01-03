class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def require_login
    head :not_found unless current_user
  end
end
