export function setFieldAValue(payload) {
  return { type: "SET_FIELDA_VALUE", data: payload };
}

export function setFieldBValue(payload) {
  return { type: "SET_FIELDB_VALUE", data: payload };
}

export function getFieldAValue(payload) {
  return { type: "GET_FIELDA_VALUE", data: payload };
}

export function getFieldBValue(payload) {
  return { type: "GET_FIELDB_VALUE", data: payload };
}

export function getCurrencies() {
  return { type: "GET_CURRENCIES" };
}
