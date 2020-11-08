import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding: 10px 20px;
`

export const ProductsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1023px) and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default ProductContainer
