import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/Button/Button";
import TableData from "./components/TableData/TableData";
import BarChart from "./components/BarChart/BarChart";
import {
  fetchDataSuccess,
  clearData,
  selectRow,
} from "./store/dataSlice";

function App() {
  const dispatch = useDispatch();
  const { data, selectedRow, chartData } = useSelector(
    (state) => state.dataState
  );

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data", {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Произошла ошибка!");
      }

      const result = await response.json();
      dispatch(fetchDataSuccess(result));
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearHandlerData = () => {
    dispatch(clearData());
  };

  const saveData = () => {
    // логика сохранения в csv
  };

  const selectRowHandler = (row) => {
    dispatch(selectRow(row));
  };

  return (
    <div className="App">
      <div className="firstBlock">
        <Button
          onClickFunction={fetchData}
          type="primary"
          text="Получить данные"
        />
        <Button
          onClickFunction={clearHandlerData}
          type="clear"
          text="Очистить данные"
        />
        <Button
          onClickFunction={saveData}
          type="save"
          text="Сохранить данные"
        />
      </div>

      <div className="GraphicBlock">
        {chartData && <BarChart data={chartData} />}
      </div>

      <div className="tableBlock">
        <TableData
          data={data}
          selectedRow={selectedRow}
          onSelectRow={selectRowHandler}
        />
      </div>
    </div>
  );
}

export default App;
