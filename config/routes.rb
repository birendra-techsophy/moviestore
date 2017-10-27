Rails.application.routes.draw do
  root 'movie_stores#index'
  # React Router needs a wildcard
  get '*path', to: 'movie_stores#index'

  resources :movie_stores
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
