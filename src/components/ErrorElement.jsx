import PropTypes from 'prop-types';

const ErrorElement = ({ message }) => {
  // Check if message is undefined or null, and provide a default message if it is
  const errorMessage = message || 'An error occurred';

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
        <h2 className="font-bold">Oops! Something went wrong</h2>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

ErrorElement.propTypes = {
  message: PropTypes.string, // Remove the 'isRequired' flag
};

export default ErrorElement;
