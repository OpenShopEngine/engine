class PaymentSystemsController < ApplicationController
  before_action :set_payment_system, only: [:show, :update, :destroy]
  before_action :current_user, only: [:create, :update, :destroy]

  # GET /payment_systems
  def index
    @payment_systems = PaymentSystem.all

    render json: @payment_systems
  end

  # GET /payment_systems/1
  def show
    render json: @payment_system
  end

  # POST /payment_systems
  def create
    if @current_user.role? :admin
      @payment_system = PaymentSystem.new(ActiveSupport::JSON.decode(request.body.read))

      if @payment_system.save
        render json: @payment_system, status: :created, location: @payment_system
      else
        render json: @payment_system.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # PATCH/PUT /payment_systems/1
  def update
    if @current_user.role? :admin
      if @payment_system.update(ActiveSupport::JSON.decode(request.body.read))
        render json: @payment_system
      else
        render json: @payment_system.errors, status: :unprocessable_entity
      end
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  # DELETE /payment_systems/1
  def destroy
    if @current_user.role? :admin
      @payment_system.destroy
    else
      render json: "Only for admins!", status: :bad_request
    end
  end

  private
    def current_user
      @current_user = User.find(session[:user_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_payment_system
      @payment_system = PaymentSystem.find(params[:id])
    end
end
