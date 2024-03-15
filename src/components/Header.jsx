import Nav from './Nav';
import SiteName from './SiteName';
import { useState } from 'react';

const Header = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <header className="bg-green-500 text-white w-full h-24 flex justify-center sticky z-40 top-0 px-8">
      <div className="container flex justify-between items-center">
        <div>
          <SiteName height={50} width={150} />
        </div>
        <div>
          <label
            htmlFor="menu"
            className="w-10 h-10 flex items-center justify-center flex-col gap-1 md:hidden"
          >
            <input
              type="checkbox"
              name="menu"
              id="menu"
              className="hidden"
              checked={checkboxValue}
              onChange={() => {
                setCheckboxValue(!checkboxValue);
              }}
            />
            <span
              className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
                checkboxValue ? 'rotate-45 absolute r' : ''
              }`}
            ></span>
            <span
              className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
                checkboxValue ? 'rotate-45 absolute' : ''
              }`}
            ></span>
            <span
              className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
                checkboxValue ? '-rotate-45 absolute' : ''
              }`}
            ></span>
          </label>
          <Nav checkboxValue={checkboxValue} />
        </div>
      </div>
    </header>
  );
};

export default Header;
