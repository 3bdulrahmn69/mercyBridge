import PropTypes from 'prop-types';
import Logo from '../assets/logo.png';

function SiteName({ width, height, classNames }) {
  return (
    <a href="/">
      <img
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
        style={{
          width: width ? width : 100,
          height: height ? height : 100,
        }}
        className={classNames}
      />
    </a>
  );
}

SiteName.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classNames: PropTypes.string,
};

export default SiteName;
