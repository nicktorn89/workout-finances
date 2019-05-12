import React, { memo } from 'react';
import { TableProps } from './types';
import { TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import Checkbox from '@material-ui/core/Checkbox';
import { MaterialTable, MaterialPaper } from './styled';

let id = 0;

function createData(date: Date, people: number, salary: number,
  isFree: boolean, isPersonal: boolean, isJumps: boolean) {
  id += 1;
  return { id, date, people, salary, isFree, isPersonal, isJumps };
}

const Table: React.FC<TableProps> = ({ data, onCheckboxChange }) => {
  const rows = data.map((k) => createData(k.date, k.people, k.price, k.isFree, k.isPersonal, k.isJumps));

  return (
    <MaterialPaper>
      <MaterialTable>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className='table-head-cell'>Дата</TableCell>
            <TableCell className='table-head-cell'>Кол-во человек</TableCell>
            <TableCell className='table-head-cell'>Прибыль</TableCell>
            <TableCell className='table-head-cell'>Бесплатная</TableCell>
            <TableCell className='table-head-cell'>Персональная</TableCell>
            <TableCell className='table-head-cell'>Джампы</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell className='table-body-cell'>
                <Checkbox
                  name={`${index}`}
                  onClick={onCheckboxChange}
                />
              </TableCell>
              <TableCell 
                className='table-body-cell'
                component='th' 
                scope='row'
              >
                {`${row.date}`}
              </TableCell>
              <TableCell 
                className='table-body-cell' 
                align='left'
              >
                {row.people}
              </TableCell>
              <TableCell 
                className='table-body-cell' 
                align='left'
              >
                {row.salary}
              </TableCell>
              <TableCell 
                className='table-body-cell' 
                align='left'
              >
                {row.isFree && <Done />}
              </TableCell>
              <TableCell 
                className='table-body-cell' 
                align='left'
              >
                {row.isPersonal && <Done />}
              </TableCell>
              <TableCell 
                className='table-body-cell' 
                align='left'
              >
                {row.isJumps && <Done />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </MaterialPaper>
  );
};

export default memo(Table);
