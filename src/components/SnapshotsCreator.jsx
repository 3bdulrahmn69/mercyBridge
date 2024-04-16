import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function SnapshotsCreator({ snapshots, name, handleImageClick }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {snapshots &&
        snapshots.map((snapshot, idx) => (
          <figure key={idx} className="w-full h-96 relative">
            <img
              src={snapshot}
              alt={name}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer rounded-lg border-4 border-green-500"
              onClick={() => handleImageClick(idx)}
            />
          </figure>
        ))}
      {!snapshots && (
        <div className="text-2xl text-center text-red-500 font-bold">
          {t('newsProfile.noSnapshots')}
        </div>
      )}
    </div>
  );
}

SnapshotsCreator.propTypes = {
  snapshots: PropTypes.array,
  name: PropTypes.string,
  handleImageClick: PropTypes.func,
};

export default SnapshotsCreator;
