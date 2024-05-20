import PropTypes from 'prop-types';

const DashBoardRecord = ({ element, deleteFunc, editFunc, type }) => {
  if (type === 'charity') {
    return (
      <tr>
        <td className="px-4 text-center py-2 ">{element.id}</td>
        <td className="font-bold py-2 ">{element.name}</td>
        <td className="flex justify-around py-2 ">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-20"
            onClick={() => editFunc(element.id)}
          >
            Edit
          </button>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-20"
            onClick={() => deleteFunc(element.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  } else if (type === 'news') {
    return (
      <tr>
        <td className="px-4 text-center py-2 ">{element.id}</td>
        <td className="font-bold py-2 ">{element.title}</td>
        <td className="text-center py-2 ">{element.date}</td>
        <td className="flex justify-around py-2 ">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-20"
            onClick={() => editFunc(element.id)}
          >
            Edit
          </button>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-20"
            onClick={() => deleteFunc(element.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  } else if (type === 'state') {
    return (
      <tr>
        <td className="px-4 py-2 text-center">{element.id}</td>
        <td className="font-bold py-2 ">{element.name}</td>
        <td className="flex justify-center py-2 ">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-20"
            onClick={() => deleteFunc(element.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

DashBoardRecord.propTypes = {
  element: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func,
  editFunc: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default DashBoardRecord;
