import React from 'react'
import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
  return (
    <p className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"  >
        {error}
    </p>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage
