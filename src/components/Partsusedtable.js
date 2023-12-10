import React, { useState } from 'react';
import styled from 'styled-components';

const partsusedtable = () => {
  const [tableData, setTableData] = useState([
    { date: '', travel: '', onsite: '', offsite: '' },
    { date: '', travel: '', onsite: '', offsite: '' },
    { date: '', travel: '', onsite: '', offsite: '' },
    { date: '', travel: '', onsite: '', offsite: '' },
    { date: '', travel: '', onsite: '', offsite: '' },
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
            <TableHeaderSmall>Date</TableHeaderSmall>
            <TableHeaderSmall>Travel</TableHeaderSmall>
            <TableHeaderSmall>Onsite</TableHeaderSmall>
            <TableHeaderSmall>Offsite</TableHeaderSmall>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <InputLarge
                  type="text"
                  value={rowData.date}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                />
              </td>
              <td>
                <InputSmall
                  type="text"
                  value={rowData.travel}
                  onChange={(e) => handleInputChange(index, 'travel', e.target.value)}
                />
              </td>
              <td>
                <InputSmall
                  type="text"
                  value={rowData.onsite}
                  onChange={(e) => handleInputChange(index, 'onsite', e.target.value)}
                />
              </td>
              <td>
                <InputSmall
                  type="text"
                  value={rowData.offsite}
                  onChange={(e) => handleInputChange(index, 'offsite', e.target.value)}
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
  width: 70%;
  border-radius: 15px;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  background-color: #ACDBFD;
  color: black;
  padding: 10px;
`;

const TableHeaderSmall = styled(TableHeader)`
  width: 20%;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
`;

const InputSmall = styled(Input)`
  width: 60%;
`;

const InputLarge = styled(Input)`
  width: 100%;
`;

export default partsusedtable;
