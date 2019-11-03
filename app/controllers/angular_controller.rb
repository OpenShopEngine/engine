class AngularController < ActionController::Base
  def index
    render file: 'public/' + (session[:locale] || "be") + '/index.html'
  end
end
