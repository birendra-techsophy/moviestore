import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovieStores, loadingMovieStores } from '../../actions/fetchMovieStoreActionCreators';

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
  componentWillReceiveProps(nextProps) {
    // console.log('---props---', nextProps);
  }
  render() {
    const movieList = this.props.movieStoreList.movieList;
    console.log('----movieList--', movieList, this.props.movieStoreList);
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
          {(movieList && movieList.length > 0) ?
              <MovieList movieList={movieList}/>
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
  };
}

ShowMovie.propTypes = {
  movieStoreList: PropTypes.object
};

export default connect(mapStateToProps, ({ fetchMovieStores, loadingMovieStores }))(ShowMovie);
