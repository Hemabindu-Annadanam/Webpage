import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col ,Form} from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductGrid.css'
const ProductGrid = ({onAddToCart}) =>{
  const [products ,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const searchInputRef = useRef(null)
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
      }, []);
      useEffect(()=>{
        if(searchInputRef.current){
          searchInputRef.current.focus();
        }
      },[])
      const filterProducts = products.filter((product)=>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      return (
      <Container className="my-4 container-field">
            <div className='text-center'>
              <Form.Group controlId='search' className='form-field'>
                <Form.Control type='text' placeholder='Search by product name...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} ref={searchInputRef} className='mb-4 control-field'>

                </Form.Control>
            </Form.Group>
            </div>
            {filterProducts.length === 0 ?(
                <div className="text-center my-5">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png"
                  alt="No products found"
                  style={{ maxWidth: '350px', marginBottom: '20px' }}
                />
                <h4>Oops! We couldn't find any products matching your search.</h4>
              </div>
            ):(
              <Row>
              {filterProducts.map(product => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <ProductCard product={product} onAddToCart={onAddToCart}/>
                </Col>
              ))}
            </Row>
            )

            }
            
      </Container>
      )
}

export default ProductGrid;