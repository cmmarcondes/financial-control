import styled from 'styled-components';
import { TableProps } from './config';

export const StyledTable = styled.table<TableProps>`
  width: 100%;

  thead {
    display: block;

    margin: 1.25rem 1.825rem;
    font-size: 1.625rem;
  }
`;

export const StyledHead = styled.th<TableProps>`
  min-width: 15vw;
  width: ${({ width }) => width};
  padding: 0.625rem 1.625rem;

  font-weight: 400;
  color: ${({ color }) => color};

  .head-title {
    color: #00000095;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const StyledData = styled.td<TableProps>`
  width: ${({ width }) => width};
  padding: 0.625rem 1.625rem;

  font-size: 1rem;
  text-align: ${({ textAlign }) => textAlign};

  i {
    cursor: pointer;
  }

  i + i {
    margin-left: 0.5rem;
  }
`;
