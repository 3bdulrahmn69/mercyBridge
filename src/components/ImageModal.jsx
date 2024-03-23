import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageModal = ({ img, setShowModal, imgIndex }) => {
  const [index, setIndex] = useState(imgIndex);
  return (
    <div
      className="absolute w-full h-screen top-0 left-0 bg-black/40 z-20 flex justify-center items-center"
      onClick={(e) => {
        if (e.target.classList.contains('absolute')) {
          setShowModal(false);
        }
      }}
    >
      <button
        className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md hover:bg-red-500 hover:text-white duration-300 text-2xl"
        title="Close"
        onClick={() => setShowModal(false)}
      >
        X
      </button>
      <button
        className="absolute top-1/2 left-4 text-6xl h-24 bg-gray-400 hover:bg-gray-600 duration-300 text-white rounded-md"
        title="Previous"
        onClick={() => setIndex(index === 0 ? img.length - 1 : index - 1)}
      >
        <IoIosArrowBack />
      </button>
      <div className="w-4/6">
        <img
          src={img[index]}
          alt="image"
          className="w-full h-auto object-contain rounded"
        />
      </div>
      <button
        className="absolute top-1/2 right-4 text-6xl h-24 bg-gray-400 hover:bg-gray-600 duration-300 text-white rounded-md"
        title="Next"
        onClick={() => setIndex(index === img.length - 1 ? 0 : index + 1)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

ImageModal.propTypes = {
  img: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired,
  imgIndex: PropTypes.number.isRequired,
};

export default ImageModal;
