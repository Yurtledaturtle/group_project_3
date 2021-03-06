class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :password_digest
      t.string :token

      t.timestamps null: false
    end
  end
end
