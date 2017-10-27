import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <AppBar
    title={<span style={styles.title}>Movie Store</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<FlatButton label="Login" />}
  />
);

export default Header;
