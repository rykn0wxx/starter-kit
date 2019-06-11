class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, limit: 20, default: '', null: false
      t.string :user_email, limit: 50, default: '', null: false
      t.boolean :admin, default: false
      t.string :password_digest, null: false

      t.timestamps
    end
    add_index :users, :user_name, unique: true
    add_index :users, :user_email, unique: true
  end
end
