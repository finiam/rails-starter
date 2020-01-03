class SorceryCore < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email,            null: false
      t.string :name, null: false
      t.string :role, null: false, default: :user
      t.string :crypted_password
      t.string :salt
      t.datetime :last_login_at, default: nil
      t.datetime :last_logout_at, default: nil
      t.datetime :last_activity_at, default: nil
      t.datetime :invalidate_sessions_before, default: nil
      t.string :last_login_from_ip_address, default: nil
      t.integer :failed_logins_count, default: 0
      t.datetime :lock_expires_at, default: nil
      t.string :unlock_token, :string

      t.timestamps                null: false
    end

    add_index :users, :unlock_token
    add_index :users, [:last_logout_at, :last_activity_at]
    add_index :users, :invalidate_sessions_before
    add_index :users, :email, unique: true
  end
end
