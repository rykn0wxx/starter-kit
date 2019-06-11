json.extract! list, :id, :list_name, :list_description, :board_id, :created_at, :updated_at
json.url list_url(list, format: :json)
