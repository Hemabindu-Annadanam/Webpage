import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col ,Form} from 'react-bootstrap';
import ProductCard from './ProductCard';
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
      <Container className="my-4">
            <Form.Group controlId='search' width="30">
                <Form.Control type='text' placeholder='Search products...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} ref={searchInputRef} className='mb-4'>

                </Form.Control>
            </Form.Group>
            <Row>
              {filterProducts.map(product => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <ProductCard product={product} onAddToCart={onAddToCart}/>
                </Col>
              ))}
            </Row>
      </Container>
      )
}

export default ProductGrid;