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

const Table: React.FC<TableProps> = ({ data }) => {
  const rows = data.map((k) => createData(k.date, k.people, k.price, k.isFree, k.isPersonal, k.isJumps));

  return (
    <MaterialPaper>
      <MaterialTable>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Дата</TableCell>
            <TableCell>Кол-во человек</TableCell>
            <TableCell>Прибыль</TableCell>
            <TableCell>Бесплатная</TableCell>
            <TableCell>Персональная</TableCell>
            <TableCell>Джампы</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  /* indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={numSelected === rowCount}
                  onChange={onSelectAllClick} */
                />
              </TableCell>
              <TableCell component='th' scope='row'>
                {`${row.date}`}
              </TableCell>
              <TableCell align='left'>{row.people}</TableCell>
              <TableCell align='left'>{row.salary}</TableCell>
              <TableCell align='left'>{row.isFree && <Done />}</TableCell>
              <TableCell align='left'>{row.isPersonal && <Done />}</TableCell>
              <TableCell align='left'>{row.isJumps && <Done />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </MaterialPaper>
  );
};

export default memo(Table);
