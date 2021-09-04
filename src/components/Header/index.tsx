import React from 'react';
import { HeaderProps } from './config';
import { Container } from './styles';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Header;
