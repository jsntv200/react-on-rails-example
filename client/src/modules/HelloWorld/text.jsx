import React, { PropTypes } from 'react';

function Text(props) {
  return <p>{props.title}</p>;
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Text;
