class Meal < ApplicationRecord
  has_many :user_meals
  has_many :users, through: :user_meals
  belongs_to :ingredient
  belongs_to :course
end
