class ConfigsController < ApplicationController
  before_action :set_config, only: [:show, :update, :destroy]
  before_action :current_user, only: [:create, :update, :destroy]

  # GET /configs
  def index
    @configs = Config.all

    render json: @configs
  end

  # GET /configs/1
  def show
    render json: @config
  end

  # POST /configs
  def create
    if @current_user.role? :admin
      @config = Config.new(config_params)

      if @config.save
        render json: @config, status: :created, location: @config
      else
        render json: @config.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # PATCH/PUT /configs/1
  def update
    if @current_user.role? :admin
      if @config.update(config_params)
        render json: @config
      else
        render json: @config.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # DELETE /configs/1
  def destroy
    if @current_user.role? :admin
      @config.destroy
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  private
    def current_user
      @current_user = User.find(session[:user_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_config
      @config = Config.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def config_params
      params.permit(:property, :value)
    end
end
