class Api::V1::ApiController < ApplicationController
  before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  private

  def record_not_found error
    render :json => {:error => error.message}, :status => 404
  end

  def generic_exception error
    render :json => {:error => error.message}, :status => 500
  end

end
