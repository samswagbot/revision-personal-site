import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeIcon } from 'Assets/svgs/svgs';
import { SocialLinks } from '../../components';

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${(p) => p.theme.colors.white};
    transition: opacity 0.5s, border-bottom 0.2s;
    &:hover,
    &:visited,
    &:visited:hover {
      opacity: ${(p) => p.theme.opacity.mainOpacity};
    }
  }
`;

export default function DesktopNavBar() {
  const navbarLinks = {
    home: '/',
    resume: '/resume',
    portfoilo: '/portfoilo',
    'talks & campaigns': '/talksandcampaigns',
  };

  const renderNavTitles = () =>
    Object.entries(navbarLinks).map((title) => (
      <StyledNavItem className="text-xl" key={title}>
        <Link to={title[1]}>
          {title[0] === 'home' ? <HomeIcon title="home-icon" /> : title[0]}
        </Link>
      </StyledNavItem>
    ));

  return (
    <nav className="py-6 flex justify-between bg-primary sticky overflow-auto top-0 mb-6 md:mb-14 z-10">
      <div className="flex w-full items-center">
        <ul className="flex mx-auto max-w-5xl w-full justify-around">
          {renderNavTitles()}
        </ul>
      </div>
      <SocialLinks />
    </nav>
  );
}
