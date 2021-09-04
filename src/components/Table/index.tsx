import React from 'react';
import Row from './Row';
import { TableProps } from './config';
import { StyledHead, StyledData, StyledTable } from './styles';

const Head: React.FC<TableProps> = ({
  children,
  title,
  color = 'black',
  width = '100%',
}) => (
  <StyledHead color={color} width={width}>
    <div className="head-title">{title}</div>
    {children}
  </StyledHead>
);

const Data: React.FC<TableProps> = ({
  children,
  width = '100%',
  color = 'black',
  textAlign = 'left',
}) => (
  <StyledData width={width} color={color} textAlign={textAlign}>
    {children}
  </StyledData>
);

const Table: React.FC<TableProps> & {
  Row: typeof Row;
  Head: typeof Head;
  Data: typeof Data;
} = ({ children, title }) => (
  <StyledTable>
    <thead>{title}</thead>
    {children}
  </StyledTable>
);

Table.Row = Row;
Table.Head = Head;
Table.Data = Data;

export default Table;
