import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DesktopNavBar, Footer, MobileNavBar } from '../../components';
import Theme from '../../../global/theme/Theme';
import GlobalStyles from '../../../global/theme/GlobalStyles';

export default function MainContainer({ children, className }) {
  const [width, setWidth] = useState(window.innerWidth);
  const isLaptop = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const classname = `${className} mx-8 md:mx-10 lg:mx-12`;
  return (
    <Theme>
      <GlobalStyles />
      {width < isLaptop ? <MobileNavBar /> : <DesktopNavBar />}
      <div className="flex flex-col items-center mt-8">
        <div className={classname}>{children}</div>
      </div>
      {width < isLaptop && <Footer />}
    </Theme>
  );
}

MainContainer.propType = {
  children: PropTypes.element.isRequired,
};
