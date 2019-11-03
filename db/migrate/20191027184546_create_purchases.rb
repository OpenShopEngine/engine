class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.string :cart
      t.string :payment_method
      t.decimal :total

      t.timestamps
    end
  end
end
