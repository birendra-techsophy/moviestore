class MovieStoresController < ApplicationController
  def index
    @movie_stores = MovieStore.all
     respond_to do |format|
          format.html # index.html.erb
          format.json { render :json => @movie_stores.map(&:attributes) }
     end
  end

  def new
    @movie_stores_props = { name: "Golmal Again!" }
  end
  def create
    @movie_store = MovieStore.new(movie_store_params)
    respond_to do |format|
      format.json do
        if @movie_store.save
          render :json => @movie_store
        else
          render :json => { :errors => @movie_store.errors.messages }, :status => 422
        end
      end
    end
  end

  private

  def movie_store_params
    params.require(:movie_store).permit(:name, :description, :cast, :duration, :url, :imdbrating)
  end
end
