Rails.application.routes.draw do
  scope 'api' do
    resources :purchases
    resources :carts

    resources :products
    get 'products/:id/photo' => 'products#getPhoto'

    resources :users
    resources :payment_systems
    resources :ppu_checkouts
    resources :direct_upload
    resources :locales
    resources :configs

    get 'sessions/login'
    get 'sessions/logout'
    get 'sessions/current_user'
    get 'sessions/current'

    get 'sessions/is_admin' => 'admin#index'

    mount Ppu::Engine, at: '/ppu'
    mount PpuConnector::Engine, at: '/ppu_connector'
    mount Blog::Engine, at: '/blog'
  end

  get '*p' => 'angular#index'
  get '' => 'angular#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
