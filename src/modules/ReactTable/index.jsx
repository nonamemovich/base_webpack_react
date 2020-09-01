import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils.jsx";

// Import React Table
import ReactTable from "react-table";
import "./react-table.css";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderCell = this.renderCell.bind(this);
  }
  renderCell(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable={false}
        suppressContentEditableWarning
      >
        {this.state.data[cellInfo.index][cellInfo.column.id]}
      </div>
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name 13212 3123 154435 543346435",
                  accessor: "firstName",
                  Cell: this.renderCell,
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  Cell: this.renderCell,
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default Table;
