import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import DonateBtn from './DonateBtn';
import { FaHeart } from 'react-icons/fa';

const Nav = ({ checkboxValue, navList, isHeader }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path === '') {
      setActiveItem('home');
      return;
    }
    setActiveItem(path);
  }, [location]);

  return (
    <>
      {isHeader ? (
        <nav
          className={`md:block md:static absolute top-24 right-0 w-full ${
            checkboxValue ? 'block' : 'hidden'
          }`}
        >
          <ul
            className={`flex gap-8 items-center lg:text-xl md:text-xs text-2xl md:flex-row flex-col ${
              checkboxValue ? 'py-5 bg-emerald-900 gap-4' : 'py-0'
            }`}
          >
            {navList.map((item) => (
              <li
                key={item.name}
                id={item.name}
                className={`menu-item hover:underline hover:underline-offset-8 w-fit h-fit ${
                  activeItem === item.name.toLowerCase()
                    ? 'text-red-600 font-bold underline underline-offset-8'
                    : ''
                }`}
              >
                <Link to={item.link}>{t(item.name)}</Link>
              </li>
            ))}
            <li>
              <DonateBtn className="uppercase bg-white text-green-500 text-2xl py-1 px-4 rounded-lg flex items-center gap-1 hover:gap-2 hover:bg-transparent hover:border hover:text-white transition-all">
                {t('Donate_BTN')} <FaHeart className="text-red-500" />
              </DonateBtn>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className="flex flex-col lg:text-xl md:text-xs text-2xl">
            {navList.map((item) => (
              <li
                key={item.name}
                className="hover:underline hover:underline-offset-4 capitalize"
              >
                <Link to={item.link}>{t(item.name)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

Nav.propTypes = {
  checkboxValue: PropTypes.bool,
  navList: PropTypes.array.isRequired,
  isHeader: PropTypes.bool,
};

Nav.defaultProps = {
  isHeader: true,
  navList: [
    { name: 'Home', link: '/' },
    { name: 'News', link: '/news' },
    { name: 'About', link: '/about' },
    { name: 'Works', link: '/works' },
    { name: 'Contact', link: '/contact' },
  ],
};

export default Nav;
