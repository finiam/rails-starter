Clearance.configure do |config|
  config.routes = false
  config.mailer_sender = "contact@railsstarter.io"
  config.allow_sign_up = false
  config.rotate_csrf_on_sign_in = true
end
