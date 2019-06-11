# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  admin      :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  group_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_memberships_on_group_id  (group_id)
#  index_memberships_on_user_id   (user_id)
#

class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :group
end
