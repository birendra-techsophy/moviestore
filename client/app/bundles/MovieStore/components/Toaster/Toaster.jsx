import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

import './Toaster.scss';

class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToasterOpen: this.props.isToasterOpen
    };
  }

  handleRequestClose = () => {
    this.setState({isToasterOpen: false});
  }

  render() {
    const {
      message,
      toasterColor,
      autoHideDuration } = this.props;
    return (
      <Snackbar
        open={this.state.isToasterOpen}
        message={message}
        bodyStyle={{backgroundColor: toasterColor}}
        action={
          <span className="action-color"><strong>CLOSE</strong></span>
        }
        autoHideDuration={autoHideDuration}
        onActionTouchTap={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

Toaster.propTypes = {
  message: PropTypes.string,
  isToasterOpen: PropTypes.bool,
  toasterColor: PropTypes.string,
  autoHideDuration: PropTypes.number,
};

export default Toaster;
