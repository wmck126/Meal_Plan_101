class IngredientsController < ApplicationController
  post '/ingredients' do
    ingredients = Ingredient.create(
      calories:params[:calories]
      protein:params[:protein]
      carbs:params[:carbs]
      fat:params[:fat]
      name:params[:name]
    )
    ingredients.to_json
  end

end
