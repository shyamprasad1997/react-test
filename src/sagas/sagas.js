import { takeLatest, put } from "redux-saga/effects";
import { rootServices } from "../services/rootServices";

function* getFieldAValue(action) {
  const value = yield rootServices.getConversion(
    action.data.fieldBType,
    action.data.fieldAType,
    action.data.value
  );
  yield put({ type: "SET_FIELDA_VALUE", data: value });
}

function* getFieldBValue(action) {
  const value = yield rootServices.getConversion(
    action.data.fieldAType,
    action.data.fieldBType,
    action.data.value
  );
  yield put({ type: "SET_FIELDB_VALUE", data: value });
}

function* getCurrencies() {
  const value = yield rootServices.getCurrencies();
  yield put({ type: "SET_CURRENCIES", data: value });
}

export function* watchApiCall() {
  yield takeLatest("GET_FIELDA_VALUE", getFieldAValue);
  yield takeLatest("GET_FIELDB_VALUE", getFieldBValue);
  yield takeLatest("GET_CURRENCIES", getCurrencies);
}
