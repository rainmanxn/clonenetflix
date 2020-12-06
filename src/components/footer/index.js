import React from 'react';

const Footer = ({ children, ...restProps}) => {
  return <Container {...restProps}>{children}</Container>
}

export default Footer;
