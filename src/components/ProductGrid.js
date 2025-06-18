import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Container, Row, Col , Alert, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductGrid.css'
import { API_ENDPOINTS } from '../config';
import { filterProducts as filterProductsUtil } from '../utils';
import FilterForm from './FilterForm';

const ProductGrid = ({onAddToCart}) =>{
  const [products ,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [minRating, setMinRating] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const searchInputRef = useRef(null)
  useEffect(() => {
      setLoading(true);
      fetch(API_ENDPOINTS.PRODUCTS)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch products');
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setError(null);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products. Please try again later.');
        setProducts([]);
        setLoading(false);
      });
      }, []);
  useEffect(()=>{
    if(searchInputRef.current){
      searchInputRef.current.focus();
    }
  },[])
  const categories = [...new Set(products.map(p=>p.category))]
  const filterProducts = useMemo(() => filterProductsUtil(products, { searchTerm, selectedCategory, priceRange, minRating }), [products, searchTerm, selectedCategory, priceRange, minRating]);
  const handleClearFilters = () => {
      setSearchTerm('');
      setSelectedCategory('');
      setPriceRange('');
      setMinRating('');
      setSearchError('');
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 50) {
      setSearchError('Search term must be 50 characters or less.');
    } else {
      setSearchError('');
    }
  };
  return (
    <Container className="my-4 container-field">
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <div className="text-center my-4"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>}
      <div className='text-center'>
        <FilterForm
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          searchError={searchError}
          searchInputRef={searchInputRef}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
          onClearFilters={handleClearFilters}
        />
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

ProductGrid.displayName = 'ProductGrid';

export default ProductGrid;