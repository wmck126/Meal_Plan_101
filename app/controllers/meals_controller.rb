class MealsController < ApplicationController
  def create
    meals = Meal.create(
      name:params[:name],
      ingredient_id:params[:ingredient_id],
      course_id:params[:course_id]
    )
    render json: meals, status: :created
  end

  def index
    if params[:ingredient_id] || params[:course_id]
      ingredients = Ingredient.find(params[:ingredient_id])
      courses = Course.find(params[:course_id])
      meals = ingredients.meals && courses.meals
    else
      meals = Meal.all
    end
    render json: meals, include:  [:ingredient, :course]
  end

  def show
    if params[:ingredient_id] || params[:course_id]
      ingredients = Ingredient.find(params[:ingredient_id])
      courses = Course.find(params[:course_id])
      meals = ingredients.meals && courses.meals
    else
    meals = Meal.find(params[:id])
    end
    render json: meals, include:  [:ingredient, :course]
  end
end
