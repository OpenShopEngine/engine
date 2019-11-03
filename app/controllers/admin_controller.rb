class AdminController < ApplicationController
  before_action :current_user

  def index
    if @current_user.role? :admin
      render json: {admin: true}
    else
      render json: {admin: false}, status: :unauthorized
    end
  end

  private
    def current_user
      @current_user = User.find(session[:user_id])
    end
end
