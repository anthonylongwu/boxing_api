class ChangeRecordToCurrentRecord < ActiveRecord::Migration
  def change

    rename_column :boxers, :record, :current_record
  end
end
