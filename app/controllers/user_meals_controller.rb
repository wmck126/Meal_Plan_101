class UserMealsController < ApplicationController
  post '/usermeals' do
    usermeals = UserMeal.create(
      users_id:params[:users_id]
      meals_id:params[:meals_id]
    )
    usermeals.to_json
  end
end
