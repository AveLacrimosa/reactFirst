//react komponentai
import Product from '../product/Product'
//stilius
import './ProductsList.css'
//duomenys
import data from '../../data/data'

const ProductList = () => {
  console.log(data, "tevinis elementas")
  return (
    <div className='testasNr2'>
        <Product items = {data}/>
    </div>
  )
}

export default ProductList