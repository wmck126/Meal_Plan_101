class MealsController < ApplicationController
  post '/meals' do
    meals = Meal.create(
      name:params[:name]
      ingredient_id:params[:ingredient_id]
      course_id:params[:course_id]
    )
    meals.to_json
  end
end
