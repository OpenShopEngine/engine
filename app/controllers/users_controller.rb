class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :current_user, only: [:index, :show, :update, :destroy]

  # GET /users
  def index
    if @current_user.role? :admin
      @users = User.all.to_json(:except => :password_digest)
      render json: @users
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # GET /users/1
  def show
    if @current_user.role? :admin
      render json: @user.to_json(:except => :password_digest)
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # POST /users
  def create
    @user = User.new(ActiveSupport::JSON.decode(request.body.read))

    if @user.save
      render json: @user.to_json(:except => :password_digest), status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    # TODO: Add role verification.
    if session[:user_id] == @user.id or @current_user.role? :admin
      if @user.update(ActiveSupport::JSON.decode(request.body.read))
        render json: @user.to_json(:except => :password_digest)
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: "Bad credentials!", status: :bad_request
    end
  end

  # DELETE /users/1
  def destroy
    if session[:user_id] == @user.id or @current_user.role? :admin
      @user.destroy
    else
      render json: "Bad credentials!", status: :bad_request
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def current_user
      @current_user = User.find(session[:user_id])
    end
end
