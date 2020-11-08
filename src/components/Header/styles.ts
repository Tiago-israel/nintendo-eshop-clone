import styled from 'styled-components'

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  background: #e60012;
  padding: 20px 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: translateY(-10px);
  transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    margin-top: 25px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;
  padding: 10px 20px;
  margin-bottom: 60px;

  .eshop-logo {
    margin-right: 10px;
    margin-left: 200px;
  }

  .nav-container {
    width: 100%;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        &:hover {
          color: #e60012;
          text-decoration: none;
        }
      }

      .side-menu {
        display: flex;
        align-items: center;
        a {
          margin-left: 10px;
        }
      }
    }
  }
`
