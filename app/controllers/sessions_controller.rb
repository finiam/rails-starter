class SessionsController < Clearance::SessionsController
  before_action :require_login, only: %i[show destroy]

  def show
    render json: { user: current_user }
  end

  def create
    user = authenticated_user

    sign_in(user) do |status|
      if status.success?
        authenticated_user.update(last_login_ip: request.remote_ip, last_login_at: Time.now.utc)

        render json: { redirect_url: url_after_create, user: user }
      else
        render json: { error: status.failure_message }, status: :unauthorized
      end
    end
  end

  def destroy
    sign_out

    head :ok
  end

  private

  def authenticated_user
    User.authenticate(
      params[:session][:identifier],
      params[:session][:password],
    )
  end
end
