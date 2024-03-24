import { useTranslation } from 'react-i18next';
import SiteName from '../components/SiteName';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const Year = new Date().getFullYear();
  const donateLinks = [
    { name: 'Gaza', link: '/donate?for=Gaza' },
    { name: 'Children', link: '/donate?for=Children' },
    { name: 'Women', link: '/donate?for=Women' },
    { name: 'Health', link: '/donate?for=Health' },
    { name: 'Education', link: '/donate?for=Education' },
    { name: 'Society', link: '/donate?for=Society' },
  ];

  return (
    <footer className="bg-green-800 text-white pt-16 pb-8 px-0 md:px-2 lg:px-0">
      <div className="container">
        <div className="w-full flex md:flex-row gap-4 flex-col md:px-0 px-3 justify-between md:mb-24">
          <div className="max-w-80">
            <SiteName
              height={100}
              width={200}
              classNames={'bg-gray-300/10 p-2 rounded'}
            />
            <p className="text-xl">{t('SiteDescription')}</p>
          </div>
          <div>
            <h4 className="mb-2 text-3xl md:text-xl lg:text-3xl">
              {t('Quick_Links')}
            </h4>
            <Nav isHeader={false} />
          </div>
          <div>
            <h4 className="mb-2 text-3xl md:text-xl lg:text-3xl">
              {t('Donate_Now')}
            </h4>
            <Nav isHeader={false} navList={donateLinks} />
          </div>
          <div>
            <h4 className="mb-2 text-3xl md:text-xl lg:text-3xl">
              {t('Follow_Us')}
            </h4>
            <div>
              <ul className="text-3xl flex gap-4">
                <li>
                  <a href="https://www.facebook.com">
                    <FaFacebookF className="hover:text-blue-400 transition-colors duration-300 " />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <FaTwitter className="hover:text-blue-300 transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <FaYoutube className="hover:text-red-500 transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="my-2">{t('Subscribe_Newsletter')}</p>
              <form action="">
                <input
                  type="email"
                  placeholder={t('Email_Address')}
                  className="w-full bg-white text-black rounded-md p-2 mb-4 focus:outline-green-500 border-0"
                />
                <input
                  type="submit"
                  value={t('Subscribe')}
                  className="w-full bg-green-600 text-white rounded-md p-2 hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 md:mt-0 mt-8 md:px-0 px-2 justify-between items-center">
          <div>
            <p>
              &copy; {Year} {t('SiteName')}. {t('rights_reserved')}.
            </p>
          </div>
          <div className="flex md:gap-4 gap-2">
            <Link to="/privacy" className="underline">
              {t('Privacy_Policy')}
            </Link>
            <Link to="/terms" className="underline">
              {t('Terms_Conditions')}
            </Link>
            <Link to="/help" className="underline">
              {t('Help_FAQ')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
