// import React from 'react';
// import Header from './components/Header';
// import ProductGrid from './components/ProductGrid';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Header />
//       <ProductGrid />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComp from './RoutesComp';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={cartCount} />
      <RouterComp onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default App;


