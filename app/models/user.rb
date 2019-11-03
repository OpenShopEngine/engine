class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true

  has_many :assignments
  has_many :roles, through: :assignments

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role }
  end
end
