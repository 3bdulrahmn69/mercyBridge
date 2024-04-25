import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from 'react-icons/fa';

const Alert = ({ type, children }) => {
  const [lineWidth, setLineWidth] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setLineWidth((prevWidth) => {
        const newWidth = prevWidth - 1;
        if (newWidth <= 0) {
          clearInterval(timer);
          setIsVisible(false);
          return 0;
        }
        return newWidth;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-white fixed bottom-14 right-4 min-w-56 max-w-80 py-2 px-4 rounded border-2 shadow-md">
      <AlertLine type={type} lineWidth={lineWidth} />
      {
        {
          error: (
            <div className="text-red-500 font-bold flex items-center gap-3">
              <FaExclamationCircle className="text-lg" />
              <p>{children}</p>
            </div>
          ),
          warning: (
            <div className="text-yellow-500 font-bold flex items-center gap-3">
              <FaExclamationTriangle className="text-lg" />
              <p>{children}</p>
            </div>
          ),
          info: (
            <div className="text-blue-500 font-bold flex items-center gap-3">
              <FaInfoCircle className="text-lg" />
              <p>{children}</p>
            </div>
          ),
          success: (
            <div className="text-green-500 font-bold flex items-center gap-3">
              <FaCheckCircle className="text-lg" />
              <p>{children}</p>
            </div>
          ),
        }[type]
      }
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
};

const AlertLine = ({ type, lineWidth }) => {
  return (
    <div
      style={{ width: `${lineWidth}%` }}
      className={`h-1 absolute left-0 top-0 ${
        {
          error: 'bg-red-500',
          warning: 'bg-yellow-500',
          info: 'bg-blue-500',
          success: 'bg-green-500',
        }[type]
      }`}
    ></div>
  );
};

AlertLine.propTypes = {
  lineWidth: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
};

export default Alert;
