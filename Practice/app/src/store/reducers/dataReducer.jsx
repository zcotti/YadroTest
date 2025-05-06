import maxValues from "../../Utils/maxValues";

const initialState = {
  data: [],
  selectedRow: null,
  chartData: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_TABLE":
      const selectedRow = maxValues(action.payload);
      return {
        ...state,
        data: action.payload,
        selectedRow: selectedRow,
        chartData: selectedRow.values,
      };

    case "CLEAR_DATA":
      return { ...initialState };

    case "SELECT_ROW":
      return {
        ...state,
        selectedRow: action.payload,
        chartData: action.payload.values,
      };

    default:
      return state;
  }
};

export default dataReducer;
