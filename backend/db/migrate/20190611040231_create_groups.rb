class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :group_name, limit: 50, default: '', null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
    add_index :groups, :group_name, unique: true
  end
end
