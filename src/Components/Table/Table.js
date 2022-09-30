import { useState } from 'react';
import { useEffect } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';




export default function TableDisplay() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {fetch(`${process.env.PUBLIC_URL}/MOCK_DATA.json`)
    .then(response => response.json())
    .then(data => setTableData(data));});
  return (
    <Table data={tableData}>
      
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey='id' />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey='first_name' />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey='last_name' />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey='email' />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey='gender' />
      </Column>

    </Table>
  );
}
