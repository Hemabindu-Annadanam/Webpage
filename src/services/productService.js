// Service for product API calls
import { API_ENDPOINTS } from '../config';

export async function fetchProducts() {
  const response = await fetch(API_ENDPOINTS.PRODUCTS);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}
