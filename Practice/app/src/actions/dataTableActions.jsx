export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_TABLE",
  payload: data,
});

export const clearData = () => ({
  type: "CLEAR_DATA",
});

export const selectRow = (row) => ({
  type: "SELECT_ROW",
  payload: row,
});