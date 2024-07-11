class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :account, null: false, foreign_key: true
      t.string :status, default: 'open', null: false
      t.timestamps
    end

    add_index :carts, :account_id
  end
end
