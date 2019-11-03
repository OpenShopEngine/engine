Rails.application.routes.draw do
  scope 'api' do
    resources :purchases
    resources :carts
    resources :products
    resources :users
    resources :payment_systems
    resources :ppu_checkouts

    resources :locales

    resources :configs

    get 'sessions/login'
    get 'sessions/logout'
    get 'sessions/current_user'

    get 'sessions/is_admin' => 'admin#index'

    mount Ppu::Engine, at: '/ppu'
  end

  get '*p' => 'angular#index'
  get '' => 'angular#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
