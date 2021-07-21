import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rotate from 'react-reveal/Rotate';

import { HomeIcon } from 'Assets/svgs/svgs';
import { Link } from 'react-router-dom';

const StyledNavItem = styled.li`
  font-size: ${(p) => p.theme.fontSizes.medium};
  display: flex;
  a {
    padding: 5px;
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

const StyledMenu = styled.ul`
  font-size: ${(p) => p.theme.fontSizes.small};
  background-color: ${(p) => p.theme.colors.taxiYellow};
  margin-top: 0;
  padding: 15px;
  opacity: 0.9;
`;

const StyledMenuCtn = styled.div`
  position: sticky;
  overflow: auto;
  top: 54px;
  z-index: 10;
`;

export default function MobileMenuOpen({ open }) {
  const navbarLinks = {
    home: '/',
    resume: '/resume',
    portfoilo: '/portfoilo',
    'talks & campaigns': '/talksandcampaigns',
  };

  return (
    <StyledMenuCtn>
      {open && (
        <StyledMenu>
          {Object.entries(navbarLinks).map((title) => (
            <Rotate top left>
              <StyledNavItem key={title}>
                <Link to={title[1]}>
                  {title[0] === 'home' ? (
                    <HomeIcon title="home-icon" />
                  ) : (
                    title[0]
                  )}
                </Link>
              </StyledNavItem>
            </Rotate>
          ))}
        </StyledMenu>
      )}
    </StyledMenuCtn>
  );
}

MobileMenuOpen.propTypes = {
  open: PropTypes.bool,
};
