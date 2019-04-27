import React, { memo } from 'react';
import { TableProps } from './types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { MaterialTable, MaterialPaper } from './styled';

let id = 0;

function createData(date: Date, people: number, salary: number) {
  id += 1;
  return { id, date, people, salary };
}

const rows = [
  createData(new Date('December 17, 1995 03:24:00'), 222, 222222),
];

const Table: React.FC<TableProps> = ({}) => {
  return (
    <MaterialPaper>
      <MaterialTable>
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Кол-во человек</TableCell>
            <TableCell>Прибыль</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {`${row.date.getDate()}.${row.date.getMonth()}`}
              </TableCell>
              <TableCell align='left'>{row.people}</TableCell>
              <TableCell align='left'>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </MaterialPaper>
  );
};

export default memo(Table);
