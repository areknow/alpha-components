import React from 'react';
import styles from './table.module.scss';

interface Row {
  prop: string;
  value?: string;
  default?: string;
  required: boolean;
  return?: string;
}

interface TableProps {
  rows: Row[];
  event?: boolean;
}

export const Table = ({ rows, event }: TableProps) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            {!event && <th>Value</th>}
            {!event && <th>Default</th>}
            {event && <th>Return</th>}
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, key) => (
            <tr key={key}>
              <td>{row.prop}</td>
              {!event && <td>{row.value}</td>}
              {!event && <td>{row.default}</td>}
              {event && <td>{row.return}</td>}
              <td>{JSON.stringify(row.required)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
