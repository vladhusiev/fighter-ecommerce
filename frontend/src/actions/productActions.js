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
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_SUCCESS,
  TOP_PRODUCT_LIST_SUCCESS,
  TOP_PRODUCT_LIST_FAIL,
  TOP_PRODUCT_LIST_REQUEST,
  DISCOUNT_PRODUCT_LIST_REQUEST,
  DISCOUNT_PRODUCT_LIST_SUCCESS,
  DISCOUNT_PRODUCT_LIST_FAIL,
  FIND_TOP_LESS_PRICES_REQUEST,
  FIND_TOP_LESS_PRICES_SUCCESS,
  FIND_TOP_LESS_PRICES_FAIL,
  ALL_PRODUCT_BRAND_LIST_REQUEST,
  ALL_PRODUCT_BRAND_LIST_SUCCESS,
  ALL_PRODUCT_BRAND_LIST_FAIL,
  FILTER_PRODUCTS_BY_SIZE,
} from '../constants/productConstants';
import Axios from 'axios';

const filterProductsBySize = (products, size) => (dispatch) => {
  const filteredBySize = (arr) => {
      for (let key in arr.sizes) {
        for (let innerKey in Object.keys(arr.sizes[key])) {
          for (let i = 0; i < size.length; i++) {
            if (Object.keys(arr.sizes[key])[innerKey] === size[i] && Object.entries(arr.sizes[key])[innerKey][1] > 0) {
              return arr
            }
          }
        }
      }
  }
  console.log(products.filter(filteredBySize))
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items: size === '' ? products : products.filter(filteredBySize)
    }
  })
}


const listProducts = (
  category = '',
  searchKeyword = '',
  sortOrder = ''
) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get(
      '/api/products?category=' +
        category +
        '&searchKeyword=' +
        searchKeyword +
        '&sortOrder=' +
        sortOrder
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const allBrands = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_BRAND_LIST_REQUEST });
    const { data } = await Axios.get('api/products');
    const brands = [];
    data.map((item) => {
      brands.push(item.brand)
    })
    const uniqueData = new Set(brands);
    const uniqueBrands = [...uniqueData];

    dispatch({ type: ALL_PRODUCT_BRAND_LIST_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: ALL_PRODUCT_BRAND_LIST_FAIL, payload: error.message });
  }
}

const topProductList = () => async (dispatch) => {
  try {
    dispatch({ type: TOP_PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get('api/products');
    const dataSorted = [];
    data.map((product) => {
      if (product.countInStock < 6) {
        dataSorted.push(product);
      }
    })
    dispatch({ type: TOP_PRODUCT_LIST_SUCCESS, payload: dataSorted });
  } catch (error) {
    dispatch({ type: TOP_PRODUCT_LIST_FAIL, payload: error.message });
  }
}

const discountProductList = () => async (dispatch) => {
  try {
    dispatch({ type: DISCOUNT_PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get('api/products');
    const dataSorted = [];
    data.map((item) => {
      if (item.oldPrice > 0) {
        if (dataSorted.length > 3) {
          return;
        }
        dataSorted.push(item);
      }
    })
    dispatch({ type: DISCOUNT_PRODUCT_LIST_SUCCESS, payload: dataSorted });
  } catch (error) {
    dispatch({ type: DISCOUNT_PRODUCT_LIST_FAIL, payload: error.message });
  }
}

const findTopLessPrices = () => async (dispatch) => {
  try {
    dispatch({ type: FIND_TOP_LESS_PRICES_REQUEST });
    const { data } = await Axios.get('api/products');
    const prices = []
    function sortByPrice(arr) {
      arr.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    sortByPrice(data);
    prices.push(data[0].price);
    prices.push(data[data.length - 1].price);
    dispatch({ type: FIND_TOP_LESS_PRICES_SUCCESS, payload: prices });
  } catch (error) {
    dispatch({ type: FIND_TOP_LESS_PRICES_FAIL, payload: error.message });
  }
}

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await Axios.post('/api/products', product, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put(
        '/api/products/' + product._id,
        product,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await Axios.get('/api/products/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await Axios.delete('/api/products/' + productId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

const saveProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
    const { data } = await Axios.post(
      `/api/products/${productId}/reviews`,
      review,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
  }
};

export {
  listProducts,
  detailsProduct,
  saveProduct,
  deleteProduct,
  saveProductReview,
  topProductList,
  discountProductList,
  findTopLessPrices,
  allBrands,
  filterProductsBySize
};
