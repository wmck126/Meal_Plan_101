class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :calories
      t.string :protein
      t.string :carbs
      t.string :fat
      t.string :name

      t.timestamps
    end
  end
end
