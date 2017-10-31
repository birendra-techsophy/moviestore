class MovieStoresController < ApplicationController
  def index
     movie_stores = MovieStore.all.page(params[:page]).per(params[:limit])
     respond_to do |format|
      format.html # index.html.erb
      format.json {
        render json: {
          movies: movie_stores,
          totalRecord: MovieStore.all.count
        }
      }
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

  def destroy
    @movie_store = MovieStore.find_by_id(params[:id])
    respond_to do |format|
      if @movie_store.destroy
        format.json { head :no_content, status: :ok }
        format.xml { head :no_content, status: :ok }
      else
        format.json { render json: @movie_store.errors, status: :unprocessable_entity }
        format.xml { render xml: @movie_store.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def movie_store_params
    params.require(:movie_store).permit(:name, :description, :cast, :duration, :url, :imdbrating)
  end
end
