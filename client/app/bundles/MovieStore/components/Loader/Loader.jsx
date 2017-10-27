import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const loaderStyle = {
  textAlign: 'center',
  width: 'auto',
  display: 'block',
  marginTop: 252
};

const Loader = () => (
  <CircularProgress
    style={loaderStyle}
    color="#e40046"
    size={50} thickness={5} />
);

export default Loader;
