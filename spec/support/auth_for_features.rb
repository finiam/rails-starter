module AuthForFeatures
  def login_user(user)
    page.set_rack_session(user_id: user.id)
  end
end
