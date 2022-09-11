class User < ApplicationRecord
  has_many :meals

  validates :username, presence: true, uniqueness: true
end
