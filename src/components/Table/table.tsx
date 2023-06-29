import React from 'react';
import './Table.css';

export interface TableColumn {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => (
  <table className="table">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.accessor}>{column.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={column.accessor}>{row[column.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;