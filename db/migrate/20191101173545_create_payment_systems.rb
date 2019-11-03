class CreatePaymentSystems < ActiveRecord::Migration[6.0]
  def change
    create_table :payment_systems do |t|
      t.string :name
      t.string :provider

      t.timestamps
    end
  end
end
