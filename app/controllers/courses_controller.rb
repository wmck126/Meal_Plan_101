class CoursesController < ApplicationController
  post '/courses' do
    courses = Course.create(
      name:params[:name]
    )
    courses.to_json
  end
end
