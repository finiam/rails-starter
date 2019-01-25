Rails.application.routes.draw do

  get "/", to: "home#index", via: :all
  get "*path", to: "home#index", via: :all
end
