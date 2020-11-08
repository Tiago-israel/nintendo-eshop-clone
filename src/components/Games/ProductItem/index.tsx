import React from 'react'
import ProductItemContainer from './styles'

interface Product {
  img: string
  name: string
  price: string
  releaseDate: string
}

interface ProductItemProps {
  product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <div className="product-item-img">
        <img src={product.img} />
      </div>
      <div className="product-item-details">
        <div className="product-item-title">
          <a
            href="https://store.nintendo.com.br/mortal-kombat-11-ultimate"
            target="_blank"
            rel="noreferrer"
          >
            {product.name}
          </a>
          <span className="product-item-price">{product.price}</span>
        </div>
        <div className="product-item-release">
          <b>Lançado no dia</b> {product.releaseDate}
        </div>
      </div>
    </ProductItemContainer>
  )
}

export default ProductItem
