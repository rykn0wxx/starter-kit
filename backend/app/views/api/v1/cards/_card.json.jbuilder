json.extract! card, :id, :card_name, :card_content, :postion, :created_at, :updated_at
json.url card_url(card, format: :json)
