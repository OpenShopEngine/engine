class CreateLocales < ActiveRecord::Migration[6.0]
  def change
    create_table :locales do |t|
      t.string :title
      t.string :locale

      t.timestamps
    end
  end
end
