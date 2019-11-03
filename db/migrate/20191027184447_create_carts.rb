class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.decimal :items, array: true
      t.string :user

      t.timestamps
    end
  end
end
