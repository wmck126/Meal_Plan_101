# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

puts "Beginning seeding!"

Course.create(name:"Breakfast")
Course.create(name:"Lunch")
Course.create(name:"Dinner")
Course.create(name:"Snack")


20.times do
    Ingredient.create(calories: Faker::Number.between(from: 1, to: 150), protein: Faker::Number.between(from: 1, to: 30), carbs: Faker::Number.between(from: 1, to: 50), fat: Faker::Number.between(from: 1, to: 30), name: Faker::Food.ingredient)
end

7.times do
    User.create(username:Faker::Lorem.word, image_url:Faker::Lorem.word, name:Faker::Name.name, weight: Faker::Number.between(from: 150, to: 200), height:Faker::Number.between(from: 61, to: 80), carb_goal:Faker::Number.between(from: 30, to: 40), protein_goal:Faker::Number.between(from: 30, to: 40), fat_goal:Faker::Number.between(from: 30, to: 40), activity_level:Faker::Number.between(from: 0, to: 100), bmi:Faker::Number.between(from: 15, to: 40), weight_goal:Faker::Number.between(from: 150, to: 190))
end

7.times do
    Meal.create!(name:Faker::Food.dish, ingredient_id: Faker::Number.between(from: 1, to: 10), course_id: Faker::Number.between(from: 1, to: 4))
end


puts "Done seeding"
0

