# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  admin           :boolean          default(FALSE)
#  password_digest :string           not null
#  user_email      :string(50)       default(""), not null
#  user_name       :string(20)       default(""), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_user_email  (user_email) UNIQUE
#  index_users_on_user_name   (user_name) UNIQUE
#

class User < ApplicationRecord
  has_secure_password

  has_many :groups, :dependent => :destroy
  has_many :boards, :dependent => :destroy
  has_many :memberships

  validates :user_name, :presence => true, :uniqueness => true, :length => { maximum: 20 }
  validates :user_email, :presence => true, :uniqueness => true, :length => { maximum: 50 }

  def self.from_token_payload payload
    self.find payload['sub']
  end

  def self.from_token_request request
    userlogin = request.params['auth'] && request.params['auth']['login']
    self.find_by_login userlogin
  end

  def self.find_by_login usr
    conditions = usr.dup
    login = conditions.to_s
    where(['id = :value OR lower(user_name) = :value OR lower(user_email) = :value', {value: login.strip.downcase}]).first
  end
end
