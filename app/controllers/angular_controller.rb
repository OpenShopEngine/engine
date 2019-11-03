class AngularController < ActionController::Base
  def index
    render file: 'public/' + (session[:locale] || "base") + '/index.html'
  end
end
