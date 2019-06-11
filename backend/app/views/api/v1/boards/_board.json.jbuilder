json.extract! board, :id, :board_name, :board_description, :user_id, :group_id, :position, :created_at, :updated_at
json.url board_url(board, format: :json)
