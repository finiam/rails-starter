Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new(&:admin?) do
    namespace :admin do
      resources :users

      root to: "users#index"
    end
  end

  resource :session, only: %i[show create destroy]

  root to: "home#index"
  get "*path" => "home#index"
end
