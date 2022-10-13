import styled from "styled-components";

const NavIcon = styled.img`
  height: 2rem;
  margin-left: 2rem;
`;
const NavLogo = styled.img`
  height: 3.5rem;
`;
const TopNavBarContainer = styled.div`
  .nav-link {
    color: white !important;
    font-size: 1.6rem;
    &:not(:last-child) {
      padding-right: 2rem;
    }
  }
`;
const HeaderTopBar = styled.div`
  .mr-auto.navbar-nav {
    gap: 2rem;
    align-items: baseline;

    & > * {
      width: 33px;
      height: 33px;
    }
  }

  .topBar-Header {
    background: rgba(0, 0, 0, 0.2);
    opacity: 0.9;
  }

  .header-topBar-logo {
    width: 147.05px;
    height: 51.35px;
  }

  .reponsive-topbar-toggler {
    margin: 0 1rem;
  }

  @media screen and (min-width: 1130px) {
    .reponsive-topbar-toggler {
      display: none;
    }
  }
`;

const SubBarContainer = styled.div`
  .subnav-main {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > * {
      font-size: 1.4rem;
      color: white;
      font-weight: 600;
    }
  }
`;

export { NavIcon, NavLogo, TopNavBarContainer, HeaderTopBar, SubBarContainer };
