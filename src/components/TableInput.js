import React, { useState } from 'react';
import styled from 'styled-components';

const TableInput = () => {
  const [tableData, setTableData] = useState([
    { details: '', cost: '' },
    { details: '', cost: '' },
    { details: '', cost: '' },
    { details: '', cost: '' },
    { details: '', cost: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHeaderLong>Details</TableHeaderLong>
            <TableHeaderShort>Cost</TableHeaderShort>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <InputLong
                  type="text"
                  value={rowData.details}
                  onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                />
              </td>
              <td>
                <InputShort
                  type="text"
                  value={rowData.cost}
                  onChange={(e) => handleInputChange(index, 'cost', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const Table = styled.table`
  width: 50%;
  border-radius:15px;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  background-color: #ACDBFD;
  color:black;
  padding: 10px;
  max-width:200px;
`;

const TableHeaderLong = styled(TableHeader)`

`;

const TableHeaderShort = styled(TableHeader)`
width:40%

`;

const Input = styled.input`
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
`;

const InputLong = styled(Input)`
  width: 100%; /* Adjust the width for the "Details" input */
`;

const InputShort = styled(Input)`
  width: 90%; /* Adjust the width for the "Cost" input */
`;

export default TableInput;
