import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  FaMoneyBill,
  FaHamburger,
  FaPeopleCarry,
  FaTshirt,
} from 'react-icons/fa';

const CharityCard = ({ name, description, image, methods }) => {
  const { t } = useTranslation();
  return (
    <div className="border border-green-600 flex gap-4 px-4 py-2 rounded flex-col items-center md:flex-row">
      <div className="flex">
        <figure className="w-36 h-36 rounded-full overflow-hidden border-2 border-green-500 p-4 ">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            ''
          )}
        </figure>
      </div>
      <div>
        <div>
          <h3 className="md:text-2xl text-xl mb-2 font-bold">{t(name)}</h3>
          <p>{description}</p>
        </div>
        <div className="flex items-center mt-2">
          <h4 className="bg-red-400 text-white w-fit rounded py-1 px-2 text-xs md:text-base">
            {t('donation_methods')}:
          </h4>
          <ul className="flex gap-2 mx-2">
            {methods.map((method, index) => (
              <li
                key={index}
                title={method}
                className="h-8 w-8 rounded-full flex justify-center items-center bg-green-500 text-white "
              >
                {(() => {
                  switch (method) {
                    case 'Cash':
                      return <FaMoneyBill />;
                    case 'Food':
                      return <FaHamburger />;
                    case 'Volunteer':
                      return <FaPeopleCarry />;
                    case 'Clothes':
                      return <FaTshirt />;
                    default:
                      return method;
                  }
                })()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

CharityCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  methods: PropTypes.array.isRequired,
};

export default CharityCard;
