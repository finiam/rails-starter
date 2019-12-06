class ApplicationController < ActionController::Base
  include Clearance::Controller

  protect_from_forgery with: :exception

  private

  def require_login
    unless current_user
      head :unauthorized

      return
    end

    current_user
  end
end
