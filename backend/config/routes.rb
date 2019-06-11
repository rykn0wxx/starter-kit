Rails.application.routes.draw do

  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do
      resources :boards
      resources :lists do
        member do
          patch :move
        end
      end
      resources :cards do
        member do
          patch :move
        end
      end
    end
  end
  resources :memberships, :defaults => { :format => 'json' }
  resources :groups, :defaults => { :format => 'json' }
  resources :users, :defaults => { :format => 'json' }, :constraints => { :id => /.*/ }

  root :to => 'application#index', :defaults => { :format => 'json' }
end
