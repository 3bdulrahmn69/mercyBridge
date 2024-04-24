import { useLenis } from '@studio-freight/react-lenis';
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const GoTopBtn = () => {
  const [show, setShow] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    if (scroll > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <button
      className={`fixed h-14 w-14 bg-green-500 z-50 bottom-4 right-2 rounded-full shadow-lg shadow-green-500/30 ${
        show ? 'scale-1' : 'scale-0'
      } flex flex-col justify-center items-center text-white transition-transform duration-300 ease-in-out overflow-hidden`}
      onClick={() => lenis.scrollTo(0)}
    >
      <FaAngleUp className="w-full h-full p-2 hover:animate-moveUp" />
    </button>
  );
};

export default GoTopBtn;
