import { takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";
import {
  AcctionTypes,
  addProductSuccess,
  deleteProductError,
  deleteProductSuccess,
  getProductSuccess,
  putProductsSuccess,
} from "./actions";

const GET_API_PRODUCTS_URL =
  "https://6013b47c54044a00172ddc4a.mockapi.io/productName";

const API_PRODUCTS_URL = `https://6013b47c54044a00172ddc4a.mockapi.io/productName/`;
export function* sagaGetProducts() {
  try {
    const reponse = yield axios.get(GET_API_PRODUCTS_URL);
    if (reponse) {
      yield put(getProductSuccess(reponse));
    }
  } catch (error) {}
}

export function* watchSagaGetProducts() {
  yield takeLatest(AcctionTypes.GET_PRODUCTS, sagaGetProducts);
}

export function* sagaAddProducts(action) {
  console.log({ action });
  try {
    const reponse = yield axios.post(GET_API_PRODUCTS_URL, action.payload);

    yield put(addProductSuccess(reponse));
  } catch (error) {}
}

export function* watchSagaAddProducts() {
  yield takeLatest(AcctionTypes.ADD_PRODUCTS, sagaAddProducts);
}

export function* sagaDeleteProducts(action) {
  try {
    const reponse = yield axios.delete(`${API_PRODUCTS_URL}${action.payload}`);

    if (reponse.status === 200) {
      yield put(deleteProductSuccess(reponse));
    } else {
      yield put(deleteProductError(reponse.error));
    }
  } catch (error) {
    console.log({ error });
  }
}

export function* watchSagaDeleteProducts() {
  yield takeLatest(AcctionTypes.DELETE_PRODUCTS, sagaDeleteProducts);
}

export function* sagaPutProducts(action) {
  try {
    const reponse = yield axios.put(
      `${API_PRODUCTS_URL}${action.payloadid}`,
      action.payloaddata
    );
    if (reponse) {
      yield put(putProductsSuccess(reponse.data));
    }
  } catch (error) {
    console.log({ error });
  }
}

export function* watchSagaPutProducts() {
  yield takeLatest(AcctionTypes.PUT_PRODUCTS, sagaPutProducts);
}
