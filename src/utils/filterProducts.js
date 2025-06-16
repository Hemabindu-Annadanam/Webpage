// Utility function for filtering products
export function filterProducts(products, { searchTerm, selectedCategory, priceRange, minRating }) {
  return products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
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
  });
}
