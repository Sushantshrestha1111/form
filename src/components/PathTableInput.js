import React, { useState } from 'react';
import styled from 'styled-components';
import CustomBg from '../components/customBackground';

const PathTableInput = () => {
  const [tableData, setTableData] = useState([
    { pathNo: '', description: '', cost: '' },
    { pathNo: '', description: '', cost: '' },
    { pathNo: '', description: '', cost: '' },
    { pathNo: '', description: '', cost: '' },
    { pathNo: '', description: '', cost: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  return (
    <div>
      <CustomBg text="Parts Used"/>
      <Table>
        <thead>
          <tr>
            <TableHeaderSmall>Path No</TableHeaderSmall>
            <TableHeaderLarge>Description</TableHeaderLarge>
            <TableHeaderSmall>Cost</TableHeaderSmall>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <InputSmall
                  type="text"
                  value={rowData.pathNo}
                  onChange={(e) => handleInputChange(index, 'pathNo', e.target.value)}
                />
              </td>
              <td>
                <InputLarge
                  type="text"
                  value={rowData.description}
                  onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <InputSmall
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
  width: 60%;
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
  width: 30%;
`;

const TableHeaderLarge = styled(TableHeader)`
  width: 50%;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
`;

const InputSmall = styled(Input)`
  width: 80%;
`;

const InputLarge = styled(Input)`
  width: 100%;
`;

export default PathTableInput;
