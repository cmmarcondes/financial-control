import styled from 'styled-components';
import { Description, RowProps } from './config';

export const StyledRow = styled.tr<RowProps>`
  display: block;

  width: 100%;
  margin-bottom: 0.625rem;

  font-size: 1.25rem;
  text-align: center;

  box-shadow: 0 0 6px #00000029;

  border-radius: 0 0 0.625rem 0.625rem;

  line-height: 1.4;
  white-space: nowrap;

  border-top: 4px solid
    ${({ description }) => description && Description[description]};
`;
