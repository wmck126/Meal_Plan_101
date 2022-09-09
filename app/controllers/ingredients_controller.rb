class IngredientsController < ApplicationController
  def create
    ingredients = Ingredient.create(
      calories:params[:calories],
      protein:params[:protein],
      carbs:params[:carbs],
      fat:params[:fat],
      name:params[:name]
    )
    render json: ingredients, status: :created
  end

  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  def show
    ingredients = Ingredient.find(params[:id])
    render json: ingredients
  end

end
