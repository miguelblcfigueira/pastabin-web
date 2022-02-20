import propTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY_COLOR_DARKER, SECONDARY_COLOR, WHITE } from '../globalStyles';
import Button from './button';
import ContentContainer from './content-container';

function Header({ className }) {
  const navigate = useNavigate();
  return (
    <header className={className}>
      <ContentContainer>
        <HeaderContainer>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <HeaderTitle>
              Pasta
              <span style={{ color: WHITE }}>
                bin
              </span>
            </HeaderTitle>
          </Link>
          <Button onClick={() => { navigate('/'); }}>+ Paste</Button>
        </HeaderContainer>
      </ContentContainer>
    </header>
  );
}

Header.propTypes = {
  className: propTypes.string.isRequired,
};

const HeaderTitle = styled.h1`
  color: ${PRIMARY_COLOR_DARKER};
  font-weight: 900;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeader = styled(Header)`
  background: ${SECONDARY_COLOR};
  color: ${WHITE};
`;

export default StyledHeader;
