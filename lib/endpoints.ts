
export const API_ENDPOINTS = {
  // AUTH
  REGISTER: "/accounts/register/",
  LOGIN: "/accounts/login/",
  LOGOUT: "/accounts/logout/",
  REFRESH_TOKEN: "/accounts/token/refresh/",
  ME: "/accounts/me/",
  CHANGE_PASSWORD: "/accounts/me/change-password/",

  // PRODUCTS
  PRODUCTS: "/products/public/products/",
  PRODUCT_DETAIL: (id: number | string) => `/products/public/products/${id}/`,
  SEARCH_PRODUCTS: "/products/public/products/search/",
  FEATURED_PRODUCTS: "/products/public/products/featured/",

  // CATEGORIES
  CATEGORIES: "/products/public/categories/",
  CATEGORY_DETAIL: (id: number | string) => `/products/public/categories/${id}/`,
  CATEGORY_PRODUCTS: (id: number | string) => `/products/categories/${id}/products/`,

  // CART
  CART: "/orders/cart/",
  ADD_ITEM: "/orders/cart/add_item/",
  CLEAR_CART: "/orders/cart/clear/",
  UPDATE_ITEM: (product_id: number | string) => `/orders/cart/items/${product_id}/`,
  REMOVE_ITEM: (product_id: number | string) => `/orders/cart/items/${product_id}/`,

  // ORDERS
  ORDERS: "/orders/orders/",
  ORDER_DETAIL: (id: number | string) => `/orders/orders/${id}/`,
  CANCEL_ORDER: (id: number | string) => `/orders/orders/${id}/cancel/`,
  TRACK_ORDER: (id: number | string) => `/orders/orders/${id}/track/`,

  // ADMIN USERS (if needed)
  ADMIN_USERS: "/accounts/admin/users/",
  ADMIN_USER_DETAIL: (id: number | string) => `/accounts/admin/users/${id}/`,
};
