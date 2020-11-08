import styled from 'styled-components'

const ProductItemContainer = styled.div`
  background: #fff;

  .product-item-img {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .product-item-details {
    padding: 15px;
    .product-item-title {
      display: grid;
      grid-template-columns: 2fr 1fr;

      a {
        color: #737373;
        font-size: 1.25em;

        &:hover {
          color: #23527c;
        }
      }

      span {
        justify-self: self-end;
        font-size: 1.25em;
        font-weight: 700;
        color: #ff7d01;
      }
    }

    .product-item-release {
      color: #999;
      font-size: 1em;
      margin-top: 10px;
    }
  }
`

export default ProductItemContainer
