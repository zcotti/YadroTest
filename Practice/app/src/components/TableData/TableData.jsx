import React from "react";
import "./TableData.scss";

function TableData({ data, onSelectRow, selectedRow }) {
  return (
    <>
      {
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>НАЗВАНИЕ</th>
              <th colSpan="7">ЗНАЧЕНИЕ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                className="table-data-row"
                key={item.id}
                onClick={() => onSelectRow(item)}
                style={{
                  backgroundColor:
                    selectedRow?.id === item.id ? "#f0f0f0" : "white",
                }}
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                {item.values.map((value, valueIndex) => {
                  return <td key={valueIndex}>{value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default TableData;
