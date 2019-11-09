class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :getPhoto, :update, :destroy]
  before_action :current_user, only: [:create, :update, :destroy]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

  def getPhoto
    if params[:size] === nil
      send_data @product.photo.download, :type => @product.photo.content_type, :filename => 'product_photo.png', :disposition => 'inline'
    else
      size = params[:size].to_i
      variant = @product.photo.variant(resize_to_limit: [size, size]).processed
      send_file variant.service.send(:path_for, variant.key), :type => @product.photo.content_type, :filename => 'product_photo.png', :disposition => 'inline'
    end
  end

  # POST /products
  def create
    if @current_user.role? :admin
      @product = Product.new(product_params)

      if @product.save
        render json: @product, status: :created, location: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    else
      render json: {error: "Not admin!"}
    end
  end

  # PATCH/PUT /products/1
  def update
    if @current_user.role? :admin
      if @product.update(product_params)
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    else
      render json: {error: "Not admin!"}
    end
  end

  # DELETE /products/1
  def destroy
    if @current_user.role? :admin
      @product.destroy
    else
      render json: {error: "Not admin!"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    def current_user
      @current_user = User.find(session[:user_id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.permit(:id, :name, :description, :price, :available, :photo)
    end
end
