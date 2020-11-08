import styled from 'styled-components'

const MenuContainer = styled.nav`
  background: #eceaea;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;

    li {
      a {
        color: #999;
        display: block;
        margin: 0 15px;
      }
    }
  }

  .order-by-container {
    label {
      margin-right: 7px;
    }
  }
`

export default MenuContainer
