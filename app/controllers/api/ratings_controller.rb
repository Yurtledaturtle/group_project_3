class Api::RatingsController < ApplicationController

include Api::RatingsHelper

before_action :current_api_user!

def index
  render json: @current_user.ratings
end

def create
  ratings = @current_user.ratings.create(ratings_params)
  render json: rating
end

def show
  render json: @current_user.ratings.find(params[:id])
end

def destroy
  @current_user.ratings.destroy(params[:id])
  render status: 202
end

private
def ratings_params
  params.require(:rating).permit(:mood, :comment, :latitude, :longitude, :zip_code_id)
end
end
