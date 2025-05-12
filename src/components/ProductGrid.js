import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
const sampleProducts = [
  { id: 1, title: 'Realme13', price: '799', image: 'https://cdn.lotuselectronics.com/webpimages/687581IM.webp' },
  { id: 2,title: 'iQOO Z9', price: '699', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY4m1Gv9NCPTrE3Ob3jSp0xBszBNXtjLZ6Q&s' },
  { id: 3,title: 'Redmi Note14', price: '399', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8T0r9-08NdzBrzNfN_uvMUz17Pze2sFSTg&s' },
  { id: 4, title: 'Vivo', price: '499', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipjQ9_7-kpI_Nt3kq1a6qMe0p2Vuo8WuOLQ&s'},
  { id: 5, title: 'Motorola', price: '1099', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6b4Zef5s4B_AUdyDcN4l2eyWO_KWio-zHw&s' },
  { id: 6, title: 'Infinix Xclub', price: '699', image: 'https://linkphonescenter.com/images/uploads/Infinix-Note-40-Pro-b-original-1714396474-0.webp'},
  { id: 7, title: 'Xiaomi 14 Ultra', price: '699', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5g9k3r7gzQe2cFY3-jTco1G1aBImEPJYBA&s'},
  { id: 8, title: 'OnePlus 12R', price: '699', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUAoJ_Y4Jb5JQx-AqEjqkhlerEK_iNo769g&s'},
];

const ProductGrid = ({onAddToCart} ) => (
  <Container className="my-4">
    <Row>
      {sampleProducts.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <ProductCard product={product} onAddToCart={onAddToCart}/>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductGrid;
