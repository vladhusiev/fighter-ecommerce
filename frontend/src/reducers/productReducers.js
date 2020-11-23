import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_REVIEW_SAVE_SUCCESS,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_RESET,
  TOP_PRODUCT_LIST_REQUEST,
  TOP_PRODUCT_LIST_SUCCESS,
  TOP_PRODUCT_LIST_FAIL,
  DISCOUNT_PRODUCT_LIST_REQUEST,
  DISCOUNT_PRODUCT_LIST_SUCCESS,
  DISCOUNT_PRODUCT_LIST_FAIL,
  FIND_TOP_LESS_PRICES_SUCCESS,
  FIND_TOP_LESS_PRICES_REQUEST,
  FIND_TOP_LESS_PRICES_FAIL,
  ALL_PRODUCT_BRAND_LIST_REQUEST,
  ALL_PRODUCT_BRAND_LIST_SUCCESS,
  ALL_PRODUCT_BRAND_LIST_FAIL,
  FILTER_PRODUCTS_BY_SIZE,
} from '../constants/productConstants';



function productListReducer(state = { products: [], filteredProducts: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload, filteredProducts: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return { ...state, filteredProducts: action.payload.items, size: action.payload.size }
    default:
      return state;
  }
}

function allProductBrandListReducer(state = { brands: [] }, action) {
  switch (action.type) {
    case ALL_PRODUCT_BRAND_LIST_REQUEST:
      return { loading: true, brands: [] };
    case ALL_PRODUCT_BRAND_LIST_SUCCESS:
      return { loading: false, brands: action.payload };
    case ALL_PRODUCT_BRAND_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetailsReducer(state = { product: { reviews: [] } }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productSaveReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productReviewSaveReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCT_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case PRODUCT_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}

function topProductListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case TOP_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case TOP_PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case TOP_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default: 
      return state;
  }
}

function discountProductListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case DISCOUNT_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case DISCOUNT_PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case DISCOUNT_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default: 
      return state;
  }
}

function findTopLessPricesReducer(state = { products: { prices: [] } }, action) {
  switch (action.type) {
    case FIND_TOP_LESS_PRICES_REQUEST:
      return { loading: true };
    case FIND_TOP_LESS_PRICES_SUCCESS:
      return { loading: false, prices: action.payload }
    case FIND_TOP_LESS_PRICES_FAIL:
      return { loading: false, error: action.payload }
    default: 
      return state;
  }
}

export {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
  topProductListReducer,
  discountProductListReducer,
  findTopLessPricesReducer,
  allProductBrandListReducer,
};
