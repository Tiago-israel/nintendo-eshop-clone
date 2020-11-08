import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Games/Menu'
import {
  ProductContainer,
  ProductsGridContainer
} from '../components/Games/ProductContainer'
import ProductItem from '../components/Games/ProductItem'

const products = [
  {
    id: 1,
    name: 'Fitness Boxing 2: Rhythm & Exercise',
    releaseDate: '04/12/2020',
    price: 'R$ 249,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/1/9/1920x1080_magento_fb2_pre_pt.jpg'
  },
  {
    id: 2,
    name: 'Hyrule Warriors: Age of Calamity',
    releaseDate: 'R$ 299,00',
    price: 'R$ 299,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/h/w/hw_aoc_pt.jpg'
  },
  {
    id: 3,
    name: 'Pikmin™ 3 Deluxe',
    releaseDate: '30/10/2020',
    price: 'R$ 299,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/p/i/pikmin3_1920x1080.jpg'
  },
  {
    id: 4,
    name: 'Part Time UFO',
    releaseDate: '28/10/2020',
    price: 'R$ 46,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/u/f/ufo.jpg'
  },
  {
    id: 5,
    name: 'Mortal Kombat 11 Ultimate',
    releaseDate: '22/10/2020',
    price: 'R$ 279,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/m/k/mk11_ultimate_eshop_banner_1920x1080_20_0914.jpg'
  },
  {
    id: 6,
    name: 'FIFA 21 Nintendo Switch™ Edição Legacy',
    releaseDate: '09/10/2020',
    price: 'R$ 239,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/f/i/fifa21le_switch_software_banner_1920x1080_v1.jpg'
  },
  {
    id: 7,
    name: 'Super Mario Bros.™ 35',
    releaseDate: '01/10/2020',
    price: 'R$ 0,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/s/m/sm_35.jpg'
  },
  {
    id: 8,
    name: 'Kirby Fighters™ 2',
    releaseDate: '25/09/2020',
    price: 'R$ 99,00',
    img:
      'https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/f/i/fizz_banner_1920x1080.jpg'
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Todos os jogos lançados</title>
      </Head>
      <Header />
      <ProductContainer>
        <Menu />
        <ProductsGridContainer>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsGridContainer>
      </ProductContainer>
    </>
  )
}

export default Home
