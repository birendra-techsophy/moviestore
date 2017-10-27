import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { createMovieStore } from '../../actions/movieStoreActionCreators';
import Loader from '../../components/Loader/Loader';
import Toaster from '../../components/Toaster/Toaster';

import './AddMovie.scss';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      isRedirect: false
    };
  }

  onChangeFormField = (event) => {
    const { id, value } = event.target;
    const { movieDetails } = this.state;
    movieDetails[id] = value || ''
    this.setState({ movieDetails });
  }

  handleSubmit = (event) => {
    const { createMovieStore, movieStore } = this.props;
    createMovieStore(this.state.movieDetails);
    this.props.history.push('/');
  }

  render() {
    const { error, loading } = this.props.movieStore;
    const { isRedirect } = this.state;
    if (isRedirect && !error) {
       return <Redirect to='/'/>;
    } else {
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <form>
              <TextField
                id="name"
                hintText="Movie Name"
                floatingLabelText="Name"
                onChange={(event) => this.onChangeFormField(event)}
              /><br />
              <TextField
                id="description"
                className="l-0"
                hintText="Movie Description"
                floatingLabelText="Description"
                multiLine={true}
                rows={2}
                onChange={(event) => this.onChangeFormField(event)}
              /><br />
              <TextField
                id="cast"
                hintText="Movie Cast"
                floatingLabelText="Cast"
                onChange={(event) => this.onChangeFormField(event)}
              /><br />
              <TextField
                id="duration"
                hintText="Duation"
                floatingLabelText="Duation"
                onChange={(event) => this.onChangeFormField(event)}
              /><br />
              <TextField
                id="url"
                hintText="Movie URL"
                floatingLabelText="URL"
                onChange={(event) => this.onChangeFormField(event)}
              /><br />
              <TextField
                id="imdbrating"
                hintText="IMDB Rating"
                floatingLabelText="IMDB Rating"
                onChange={(event) => this.onChangeFormField(event)}
              />
            </form><br />
            <div className="text-center">
              <RaisedButton label="Save" primary={true} onClick={(event) => this.handleSubmit(event)} />
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movieStore: state.movieStore,
  };
}

AddMovie.propTypes = {
  movieStore: PropTypes.object
};

export default connect(mapStateToProps, ({ createMovieStore }))(AddMovie);
