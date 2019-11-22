Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new(&:admin?) do
    namespace :admin do
      resources :users

      root to: "users#index"
    end
  end

  constraints Clearance::Constraints::SignedIn.new do
    resource :session, only: %i[show destroy]
  end

  constraints Clearance::Constraints::SignedOut.new do
    resource :session, only: [:create]
  end

  root to: "home#index"
  get "*path" => "home#index"
end
