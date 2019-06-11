class ApplicationController < ActionController::Base
  include Knock::Authenticable

  protect_from_forgery with: :null_session

  def index
    render json: 'rykn0wxx'
  end
end
