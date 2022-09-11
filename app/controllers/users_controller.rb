class UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    if 
    user = User.all
    render json: user
  end
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :name, :weight, :height, :carb_goal, :protein_goal, :fat_goal, :activity_level, :bmi, :weight_goal)
  end
end
