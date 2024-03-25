import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BannerImg from './BannerImg';
import { getCharities } from './utilities';

const Banner = ({ speed }) => {
  const [charities, setCharities] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId = null;
    let isHovering = false;

    try {
      const fetchCharities = async () => {
        const response = await getCharities();
        setCharities(response.charities);
      };
      fetchCharities();
    } catch (error) {
      console.error('Error fetching charities:', error);
    }

    const scrollContent = () => {
      if (!isHovering) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scrollContent);
    };

    const onMouseEnter = () => (isHovering = true);
    const onMouseLeave = () => (isHovering = false);

    // container.addEventListener('mouseenter', onMouseEnter);
    // container.addEventListener('mouseleave', onMouseLeave);

    container.style.overflowX = 'hidden';

    scrollContent();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      // Re-enable scrolling when component unmounts
      container.style.overflowX = 'auto';
    };
  }, [speed]);

  return (
    <div
      dir="ltr"
      ref={scrollRef}
      className="bg-gray-500/50 overflow-hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full md:h-36 h-24 md:p-4 py-2 flex logos"
      style={{ display: 'flex', overflowX: 'auto' }}
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {charities.map((charity) => (
            <BannerImg key={charity.id} img={charity.logo} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

Banner.propTypes = {
  speed: PropTypes.number,
};

Banner.defaultProps = {
  speed: 1,
};

export default Banner;
