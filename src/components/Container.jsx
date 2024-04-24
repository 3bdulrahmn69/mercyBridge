import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <div className={`min-w-0 max-w-5xl my-0 mx-auto ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
