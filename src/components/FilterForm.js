import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const FilterForm = ({
  searchTerm,
  onSearchChange,
  searchError,
  searchInputRef,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  onClearFilters,
}) => (
  <>
    <Form.Group controlId='search' className='form-field'>
      <Form.Control
        type='text'
        placeholder='Search by product name...'
        value={searchTerm}
        onChange={onSearchChange}
        ref={searchInputRef}
        className='mb-4 control-field'
        isInvalid={!!searchError}
      />
      <Form.Control.Feedback type='invalid'>{searchError}</Form.Control.Feedback>
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
        <Button onClick={onClearFilters} className="clear-outline-btn">
          Clear
        </Button>
      </Col>
    </Row>
  </>
);

export default FilterForm;
