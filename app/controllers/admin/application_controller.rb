module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :require_login, :require_admin

    private

    def require_admin
      head :not_found unless current_user.admin?
    end
  end
end
