import PropTypes from 'prop-types';
import { useState } from 'react';

const PostCharity = ({ setShowPostCharity }) => {
  const [data, setData] = useState({
    name: '',
    link: '',
    description: '',
    logo: '',
    banner: '',
    state: '',
    address: '',
    snapshot: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full h-screen fixed top-0 bg-black/80 flex items-center justify-center">
      <div className="w-8/12 min-h-3/4 bg-white rounded-lg relative animate-slideUp">
        <button
          className="bg-red-500 text-white w-11 h-11 text-2xl rounded-full absolute -top-6 -right-4 hover:bg-red-600 transition-colors duration-300"
          onClick={() => setShowPostCharity(false)}
        >
          X
        </button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-2xl font-semibold">Add Charity</h2>
            <div className="flex gap-2">
              <div className="w-3/6">
                <label htmlFor="name" className="block">
                  Charity Name
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
              <div className="w-3/6">
                <label htmlFor="link" className="block">
                  Website
                </label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => setData({ ...data, link: e.target.value })}
                  value={data.link}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                value={data.description}
                required
              ></textarea>
            </div>
            <div className="flex gap-2">
              <div className="w-3/6">
                <label htmlFor="image" className="block">
                  Logo URL
                </label>
                <input
                  type="text"
                  id="logo"
                  name="logo"
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => setData({ ...data, logo: e.target.value })}
                  value={data.logo}
                  required
                />
              </div>
              <div className="w-3/6">
                <label htmlFor="banner" className="block">
                  Banner URL
                </label>
                <input
                  type="text"
                  id="banner"
                  name="banner"
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => setData({ ...data, banner: e.target.value })}
                  value={data.banner}
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-3/6">
                <label htmlFor="state" className="block">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                  value={data.state}
                  required
                />
              </div>
              <div className="w-3/6">
                <label htmlFor="address" className="block">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  value={data.address}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="snapshot" className="block">
                snapshot
              </label>
              <input
                type="text"
                id="snapshot"
                name="snapshot"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => setData({ ...data, snapshot: e.target.value })}
                value={data.snapshot}
                required
              />
            </div>
            <div className="text-white flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-colors duration-300"
                onClick={() => setShowPostCharity(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

PostCharity.propTypes = {
  setShowPostCharity: PropTypes.func.isRequired,
};

export default PostCharity;
