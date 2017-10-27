import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovieStores, loadingMovieStores } from '../../actions/fetchMovieStoreActionCreators';
import { deleteMovieStores, loading } from '../../actions/deleteMovieStoreActionCreators';

class ShowMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { fetchMovieStores, loadingMovieStores } = this.props;
    loadingMovieStores();
    fetchMovieStores();
  }

  deleteMovie = (rowNumber, colNumber) => {
    const { fetchMovieStores, loading, deleteMovieStores } = this.props;
    const movieList = this.props.movieStoreList.movieList;
    if (colNumber === 7) {
      loading();
      deleteMovieStores(movieList[rowNumber].id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { error, loading } = nextProps.deleteMovieStore;
    if (!error && !loading) {
      loadingMovieStores();
      fetchMovieStores();
    }
  }

  render() {
    const movieList = this.props.movieStoreList.movieList;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
          {(movieList && movieList.length > 0) ?
              <MovieList movieList={movieList} deleteMovie={this.deleteMovie}/>
            :
            <h2>Not yet to show any movie record</h2>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieStoreList: state.movieStoreList,
    deleteMovieStore: state.deleteMovieStore
  };
}

ShowMovie.propTypes = {
  movieStoreList: PropTypes.object
};

export default connect(mapStateToProps, ({ fetchMovieStores, loadingMovieStores, deleteMovieStores, loading }))(ShowMovie);
