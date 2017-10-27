class CreateMovieStores < ActiveRecord::Migration[5.1]
  def change
    create_table :movie_stores do |t|
      t.string :name
      t.text :description
      t.text :cast
      t.string :duration
      t.string :url
      t.string :imdbrating

      t.timestamps
    end
  end
end
