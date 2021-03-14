import { all } from "redux-saga/effects";
import {
  watchSagaAddProducts,
  watchSagaDeleteProducts,
  watchSagaGetProducts,
  watchSagaPutProductData,
  watchSagaPutProducts,
} from "../../view/login/saga";

function* rootSaga() {
  yield all([
    watchSagaGetProducts(),
    watchSagaAddProducts(),
    watchSagaDeleteProducts(),
    watchSagaPutProducts(),
  ]);
}

export default rootSaga;
