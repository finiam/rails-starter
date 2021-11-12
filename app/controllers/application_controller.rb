class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :attach_csrf_token_to_header

  private

  # SORCERY OVERRIDE
  #
  # Respond with a not found response when not authenticated
  def not_authenticated
    head :not_found
  end

  # SORCERY OVERRIDE
  #
  # Set the response after the yield of a controller action
  # so that each request always has the csrf token on the
  # headers of the response
  def attach_csrf_token_to_header
    yield

    token = session[:_csrf_token] || form_authenticity_token
    response.headers["X-CSRF-Token"] = token
  end
end
