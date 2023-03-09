import './Product.css';

const Product = (props) => {
    console.log(props.items)
  return (
    <div className="products_list">
        {
            props.items.map((item, index)=>(
                <div key={index} className="one_item">
                    <div className='one-item-img'>
                    <img src={item.imageUrl} alt=""></img>
                    </div>
                    <h4>{item.name}</h4>
                    <div className='products_list_description'>
                    <p>{item.description}</p>
                    </div>
                    <div className='bottomTag'>
                    <p>Price: {item.price} euro.</p>
                    <p> In stock:{item.countInStock}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Product