import PropTypes from 'prop-types';
import { postState } from './utilities';

function PostState({ setShowPostState, data, setData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postState(data);
      console.log('State posted:', response);
      setData({ name: '' });
      setShowPostState(false);
    } catch (error) {
      console.error('Error posting state:', error);
    }
  };

  return (
    <div className="w-full h-screen fixed top-0 bg-black/80 flex items-center justify-center">
      <div className="w-8/12 min-h-3/4 bg-white rounded-lg relative animate-slideUp">
        <button
          className="bg-red-500 text-white w-11 h-11 text-2xl rounded-full absolute -top-6 -right-4 hover:bg-red-600 transition-colors duration-300"
          onClick={() => setShowPostState(false)}
        >
          X
        </button>
        <form onSubmit={(e) => handleSubmit(e)} className="py-8">
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-2xl font-semibold">Add State</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="block">
                State Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                value={data.name}
                required
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 text-white">
            <button
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-colors duration-300"
              onClick={() => {
                setData({ name: '' });
                setShowPostState(false);
              }}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

PostState.propTypes = {
  setShowPostState: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default PostState;
