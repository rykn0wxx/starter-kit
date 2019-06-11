# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  group_name :string(50)       default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_groups_on_group_name  (group_name) UNIQUE
#  index_groups_on_user_id     (user_id)
#

class Group < ApplicationRecord
  belongs_to :user
  has_many :memberships, :dependent => :destroy

  validates :group_name, :presence => true, :uniqueness => true, :length => { maximum: 50 }
end
