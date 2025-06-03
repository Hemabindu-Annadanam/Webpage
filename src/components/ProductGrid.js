import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col ,Form, Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductGrid.css'
const ProductGrid = ({onAddToCart}) =>{
  const [products ,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [minRating, setMinRating] = useState('');
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
      const categories = [...new Set(products.map(p=>p.category))]
      const filterProducts = products.filter((product)=>{
        // product.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesPrice =
          priceRange === 'under25'
            ? product.price < 25
            : priceRange === '25to50'
            ? product.price >= 25 && product.price <= 50
            : priceRange === 'above50'
            ? product.price > 50
            : true;
        const matchesRating = minRating ? product.rating?.rate >= parseFloat(minRating) : true;
        
        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
      })
      const handleClearFilters = () => {
          setSearchTerm('');
          setSelectedCategory('');
          setPriceRange('');
          setMinRating('');
          if (searchInputRef.current) {
            searchInputRef.current.focus();
          }
        };

      return (
    <Container className="my-4 container-field">
      <div className='text-center'>
        <Form.Group controlId='search' className='form-field'>
          <Form.Control
            type='text'
            placeholder='Search by product name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchInputRef}
            className='mb-4 control-field'
          />
        </Form.Group>

        <Row className="mb-4">
          <Col md={3}>
            <Form.Group controlId="category">
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='control-field'
              >
                <option value="">All Categories</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="price">
              <Form.Select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className='control-field'
              >
                <option value="">All Prices</option>
                <option value="under25">Under $25</option>
                <option value="25to50">$25 to $50</option>
                <option value="above50">Above $50</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="rating">
              <Form.Select
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
                className='control-field'
              >
                <option value="">All Ratings</option>
                <option value="1">1 ⭐ & up</option>
                <option value="2">2 ⭐ & up</option>
                <option value="3">3 ⭐ & up</option>
                <option value="4">4 ⭐ & up</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3} className="d-flex align-items-end">
           <Button onClick={handleClearFilters} className="clear-outline-btn">
            Clear
          </Button>

          </Col>
        </Row>
      </div>

      {filterProducts.length === 0 ? (
        <div className="text-center my-5">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png"
            alt="No products found"
            style={{ maxWidth: '350px', marginBottom: '20px' }}
          />
          <h4>Oops! We couldn't find any products matching your search.</h4>
        </div>
      ) : (
    <Row>
      {filterProducts.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  )}
</Container>

      )
}

export default ProductGrid;