import React from 'react';
import { RowProps } from './config';
import { StyledRow } from './styles';

const Row: React.FC<RowProps> = ({ children, description = 'none' }) => (
  <StyledRow description={description}>{children}</StyledRow>
);

export default Row;
