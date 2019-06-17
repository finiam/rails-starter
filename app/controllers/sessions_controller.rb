class SessionsController < Clearance::SessionsController
  def new; end

  def create
    sign_in(authenticated_user) do |status|
      if status.success?
        authenticated_user.update(last_login_ip: request.remote_ip, last_login_at: Time.now.utc)

        render json: { redirect_url: url_after_create }
      else
        render json: { error: status.failure_message }, status: :unauthorized
      end
    end
  end

  def destroy
    sign_out

    render json: { redirect_url: url_after_destroy }
  end

  private

  def url_after_destroy
    signed_out_root_url
  end

  def authenticated_user
    User.authenticate(
      params[:session][:identifier],
      params[:session][:password],
    )
  end
end
