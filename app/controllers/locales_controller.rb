class LocalesController < ApplicationController
  before_action :set_locale, only: [:show, :update, :destroy]
  before_action :current_user, only: [:create, :update, :destroy]

  # GET /locales
  def index
    @locales = Locale.all

    render json: @locales
  end

  # GET /locales/1
  def show
    session[:locale] = @locale.locale
    render json: @locale
  end

  # POST /locales
  def create
    if @current_user.role? :admin
      @locale = Locale.new(ActiveSupport::JSON.decode(request.body.read))

      if @locale.save
        render json: @locale, status: :created, location: @locale
      else
        render json: @locale.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # PATCH/PUT /locales/1
  def update
    if @current_user.role? :admin
      if @locale.update(ActiveSupport::JSON.decode(request.body.read))
        render json: @locale
      else
        render json: @locale.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # DELETE /locales/1
  def destroy
    if @current_user.role? :admin
      @locale.destroy
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  private
    def current_user
      @current_user = User.find(session[:user_id])
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_locale
      @locale = Locale.find(params[:id])
    end
end
