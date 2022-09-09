class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def create
    user = User.create(
      username:params[:username],
      image_url:params[:image_url],
      name:params[:name],
      weight:params[:weight],
      height:params[:height],
      carb_goal:params[:carb_goal],
      protein_goal:params[:protein_goal],
      fat_goal:params[:fat_goal],
      activity_level:params[:activity_level],
      bmi:params[:bmi],
      weight_goal:params[:weight_goal]
    )
    render json: user, status: :created
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
  
  def render_not_found_response
    render json: {error: "Query not found"}, status: :render_not_found
  end
end
