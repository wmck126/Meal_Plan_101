class UsersController < ApplicationController
  post '/users' do
    user = User.create(
      username:params[:username]
      image_url:params[:image_url]
      name:params[:name]
      weight:params[:weight]
      height:params[:height]
      carb_goal:params[:carb_goal]
      protein_goal:params[:protein_goal]
      fat_goal:params[:fat_goal]
      activity_level:params[:activity_level]
      bmi:params[:bmi]
      weight_goal:params[:weight_goal]
    )
    user.to_json
  end

  get '/users' do
    user = User.all
    user.to_json
  end
end
