import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovieStores, loadingMovieStores } from '../../actions/fetchMovieStoreActionCreators';
import { deleteMovieStores, loading } from '../../actions/deleteMovieStoreActionCreators';
import Pagination from '../../components/Common/Pagination';

class ShowMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      page: 1,
      numberOfRows: 3,
      rowsPerPage: [3, 6, 10],
    };
  }

  componentDidMount() {
    const { fetchMovieStores, loadingMovieStores } = this.props;
    const { page, numberOfRows } = this.state;
    loadingMovieStores();
    fetchMovieStores(page, numberOfRows);
  }

  deleteMovie = (rowNumber, colNumber) => {
    const { loading, deleteMovieStores } = this.props;
    const movieList = this.props.movieStoreList.movieList;
    if (colNumber === 7) {
      loading();
      deleteMovieStores(movieList[rowNumber].id);
    }
  }

  updateRows = (updatedState) => {
    const { loadingMovieStores, fetchMovieStores } = this.props;
    this.setState({
      page: updatedState.page,
      numberOfRows: updatedState.numberOfRows
    }, () => {
      loadingMovieStores();
      fetchMovieStores(this.state.page, this.state.numberOfRows);
    });
  }

  render() {
    const {movieList, totalRecord} = this.props.movieStoreList;
    const { page, numberOfRows, rowsPerPage } = this.state;
    const config = {
      total: totalRecord,
      page: page,
      numberOfRows: numberOfRows,
      rowsPerPage: rowsPerPage
    };
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
          {(movieList && movieList.length > 0) ?
              <div>
                <Card>
                  <Divider />
                  <MovieList movieList={movieList} deleteMovie={this.deleteMovie}/>
                  <Divider />
                  <Pagination gridPageConfig={config} updateRows={this.updateRows}/>
                </Card>
              </div>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovieStores, loadingMovieStores, deleteMovieStores, loading }, dispatch)
}
ShowMovie.propTypes = {
  movieStoreList: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);
