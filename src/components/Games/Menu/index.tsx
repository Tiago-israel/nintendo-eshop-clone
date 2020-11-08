import React from 'react'
import { Select } from '../../Inputs/styles'
import MenuContainer from './styles'

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <ul>
        <li>Filtros</li>
        <li>
          <a>Todos os jogos lançados</a>
        </li>
        <li>
          <a>Mais vendidos</a>
        </li>
        <li>
          <a>Lançados recentemente</a>
        </li>
        <li>
          <a>Nintendo Switch Online</a>
        </li>
      </ul>
      <div className="order-by-container">
        <label htmlFor="order-by">Ordenar por:</label>
        <Select id="order-by">
          <option>Data de lançamento</option>
          <option>Título (A - Z)</option>
          <option>Título (Z - A)</option>
          <option>Preço (menor para maior)</option>
          <option>Preço (maior para menor)</option>
        </Select>
      </div>
    </MenuContainer>
  )
}

export default Menu
