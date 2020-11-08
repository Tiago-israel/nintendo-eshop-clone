import React from 'react'
import { HeaderContainer, LogoContainer } from './styles'
import SearchInput from '../Inputs/SearchInput'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/logo.svg" alt="logo" />
      </LogoContainer>
      <img
        className="eshop-logo"
        src="/logo-eshop-portu.png"
        alt="eshop logo"
      />
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a>Ajuda</a>
            </li>
          </ul>
          <div className="side-menu">
            <SearchInput />
            <a>Fazer o login</a>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
