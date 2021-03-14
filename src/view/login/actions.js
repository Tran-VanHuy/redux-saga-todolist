export const AcctionTypes = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",

  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_PRODUCTS_SUCCESS: "ADD_PRODUCTS_SUCCESS",
  ADD_PRODUCTS_ERROR: "ADD_PRODUCTS_ERROR",

  DELETE_PRODUCTS: "DELETE_PRODUCTS",
  DELETE_PRODUCTS_SUCCESS: "DELETE_PRODUCTS_SUCCESS",
  DELETE_PRODUCTS_ERROR: "DELETE_PRODUCTS_ERROR",

  PUT_PRODUCTS: "PUT_PRODUCTS",
  PUT_PRODUCTS_DATA: "PUT_PRODUCTS_DATA",
  PUT_PRODUCTS_SUCCESS: "PUT_PRODUCTS_SUCCESS",
  PUT_PRODUCTS_ERROR: "PUT_PRODUCTS_ERROR",
};

export function getProducts() {
  return {
    type: AcctionTypes.GET_PRODUCTS,
  };
}

export function getProductSuccess(action) {
  return {
    type: AcctionTypes.GET_PRODUCTS_SUCCESS,
    payload: action,
  };
}

export function getProductError(err) {
  return {
    type: AcctionTypes.GET_PRODUCTS_ERROR,
    payload: err,
  };
}

export function addProduct(data, getPro) {
  return {
    type: AcctionTypes.ADD_PRODUCTS,
    payload: data,
    getPro,
  };
}

export function addProductSuccess(success) {
  return {
    type: AcctionTypes.ADD_PRODUCTS_SUCCESS,
    payload: success,
  };
}

export function addProductsError(err) {
  return {
    type: AcctionTypes.ADD_PRODUCTS_ERROR,
    payload: err,
  };
}

export function deleteProducts(data, getPro) {
  return {
    type: AcctionTypes.DELETE_PRODUCTS,
    payload: data,
    getPro,
  };
}

export function deleteProductSuccess(success) {
  return {
    type: AcctionTypes.DELETE_PRODUCTS_SUCCESS,
    payload: success,
  };
}

export function deleteProductError(err) {
  return {
    type: AcctionTypes.DELETE_PRODUCTS_ERROR,
    payload: err,
  };
}

export function putProducts(id, data, getPro) {
  return {
    type: AcctionTypes.PUT_PRODUCTS,
    payloadid: id,
    payloaddata: data,
    getPro,
  };
}

export function putProductsSuccess(success) {
  return {
    type: AcctionTypes.PUT_PRODUCTS_SUCCESS,
    payload: success,
  };
}

export function putProductsError(err) {
  return {
    type: AcctionTypes.PUT_PRODUCTS_ERROR,
    payload: err,
  };
}
