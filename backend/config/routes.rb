Rails.application.routes.draw do
  resources :memberships, :defaults => { :format => 'json' }
  resources :groups, :defaults => { :format => 'json' }
  resources :users, :defaults => { :format => 'json' }, :constraints => { :id => /.*/ }
  root :to => 'application#index', :defaults => { :format => 'json' }
end
