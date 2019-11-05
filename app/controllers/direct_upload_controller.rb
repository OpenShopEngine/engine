class DirectUploadController < ActiveStorage::DirectUploadsController
  # Should only allow null_session in API context, so request is JSON format
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  # Also, since authenticity verification by cookie is disabled, you should implement you own logic :
  before_action :current_user
  before_action :is_admin

  private
    def current_user
      @current_user = User.find(session[:user_id])
    end
    def is_admin
      unless @current_user.role? :admin
        raise 'Not admin'
      end
    end
end
