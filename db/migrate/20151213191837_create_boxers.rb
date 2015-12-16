class CreateBoxers < ActiveRecord::Migration
  def change
    create_table :boxers do |t|
      t.string :first_name
      t.string :last_name
      t.string :weight_class
      t.string :record
      t.string :titles_held
      t.string :home_town

      t.timestamps null: true
    end
  end
end
