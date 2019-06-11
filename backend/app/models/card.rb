# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  card_content :string           default("")
#  card_name    :string(50)       default(""), not null
#  position     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  list_id      :integer          not null
#
# Indexes
#
#  index_cards_on_list_id  (list_id)
#

class Card < ApplicationRecord
  acts_as_list scope: :list

  belongs_to :list

  validates :card_content, :presence => true, length: { maximum: 50 }
end
