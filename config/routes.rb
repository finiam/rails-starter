Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new(&:admin?) do
    namespace :admin do
      resources :users

      root to: "users#index"
    end
  end

  constraints Clearance::Constraints::SignedIn.new do
    root to: "home#index"

    delete "/sign_out" => "sessions#destroy", as: "sign_out"
    get "*path" => "home#index"
  end

  constraints Clearance::Constraints::SignedOut.new do
    root to: "sessions#new", as: :signed_out_root

    resource :session, only: [:create]

    get "/sign_in" => "sessions#new", as: "sign_in"
    get "*path" => "sessions#new"
  end
end
