# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Beginning seeding!"

user1 = User.create(username:"ward", image_url:"ward.png", name:"ward", weight:190, height:71, carb_goal:30, protein_goal:40, fat_goal:30, activity_level:70.0, bmi:20.0, weight_goal:170)
course1 = Course.create(name:"Breakfast")
ingredient1 = Ingredient.create(calories:"100", protein:"30", carbs:"20", fat:"10", name:"Noodle")
meal1 = Meal.create(name:"Spaghetti", ingredient_id: ingredient1.id, course_id: course1.id)

puts "Done seeding"
0

