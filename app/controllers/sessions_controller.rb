class SessionsController < ApplicationController
  def login
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        success: true,
        session: session
      }
    else
      render json: {
        success: false,
        error: "Email or password is invalid"
      }
    end
  end

  def current
    render json: session
  end

  def current_user
    render json: User.find(session[:user_id]).to_json(:except => :password_digest)
  end

  def logout
    session[:user_id] = nil
    render json: {
      success: true
    }
  end
end
