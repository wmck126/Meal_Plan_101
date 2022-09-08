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
    meals = Meal.all
    render json: meals
  end

  def show
    meals = Meal.find(params[:id])
    render json: meals
  end
end
