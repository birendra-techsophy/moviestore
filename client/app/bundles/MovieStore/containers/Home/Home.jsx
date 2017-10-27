import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionAdd from 'material-ui/svg-icons/content/add';
// import FontIcon from 'material-ui/FontIcon';
import MovieList from '../../components/MovieList/MovieList';
import AddMovie from '../../containers/AddMovie/AddMovie';
import ShowMovie from '../ShowMovie/ShowMovie';

const styles = {
  button: {
    margin: 12,
  }
};
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isAddForm: false
    }
  }

  componentWillMount() {

  }
  
  render() {
    const { movieList, isAddForm } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
          <Link to="/new">
            <RaisedButton
              label="Add New Movie"
              secondary={true}
              style={styles.button}
              icon={<ActionAdd />}
            />
          </Link>
          <ShowMovie />
        </div>
      </div>
    );
  }
}
