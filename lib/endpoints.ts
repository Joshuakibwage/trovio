const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const API_ENDPOINTS = {
  // AUTH
  REGISTER: `${API_BASE_URL}/accounts/register/`,
  LOGIN: `${API_BASE_URL}/accounts/login/`,
  LOGOUT: `${API_BASE_URL}/accounts/logout/`,
  REFRESH_TOKEN: `${API_BASE_URL}/accounts/token/refresh/`,
  ME: `${API_BASE_URL}/accounts/me/`,
  CHANGE_PASSWORD: `${API_BASE_URL}/accounts/me/change-password/`,

  // PRODUCTS
  PRODUCTS: `${API_BASE_URL}/products/public/products/`,
  PRODUCT_DETAIL: (id: number | string) => `${API_BASE_URL}/products/public/products/${id}/`,
  SEARCH_PRODUCTS: (query: string) => `${API_BASE_URL}/products/public/products/search/?q=${query}`,
  FEATURED_PRODUCTS: `${API_BASE_URL}/products/public/products/featured/`,

  //PRODUCT IMAGES
  PRODUCT_IMAGES: `${API_BASE_URL}/products/product-images`,
  PRODUCT_IMAGES_BY_ID: (productId: string) => `/products/product-images/?products=${productId}`,


  // CATEGORIES
  CATEGORIES: `${API_BASE_URL}/products/public/categories/`,
  CATEGORY_DETAIL: (id: number | string) => `${API_BASE_URL}/products/public/categories/${id}/`,
  CATEGORY_PRODUCTS: (id: number | string) => `${API_BASE_URL}/products/public/categories/${id}/products/`,

  // CART
  CART: `${API_BASE_URL}/orders/cart/`,
  ADD_ITEM: `${API_BASE_URL}/orders/cart/add_item/`,
  CLEAR_CART: `${API_BASE_URL}/orders/cart/clear/`,
  UPDATE_ITEM: (product_id: number | string) => `${API_BASE_URL}/orders/cart/items/${product_id}/`,
  REMOVE_ITEM: (product_id: number | string) => `${API_BASE_URL}/orders/cart/items/${product_id}/`,

  // ORDERS
  ORDERS: `${API_BASE_URL}/orders/orders/`,
  ORDER_DETAIL: (id: number | string) => `${API_BASE_URL}/orders/orders/${id}/`,
  CANCEL_ORDER: (id: number | string) => `${API_BASE_URL}/orders/orders/${id}/cancel/`,
  TRACK_ORDER: (id: number | string) => `${API_BASE_URL}/orders/orders/${id}/track/`,

  // ADMIN USERS
  ADMIN_USERS: `${API_BASE_URL}/accounts/admin/users/`,
  ADMIN_USER_DETAIL: (id: number | string) => `${API_BASE_URL}/accounts/admin/users/${id}/`,
};
