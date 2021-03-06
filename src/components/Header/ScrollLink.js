import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '@chakra-ui/core';

const ScrollLink = props => {
  const { colors, space } = useTheme();

  return (
    <Link
      activeClass='active'
      spy={true}
      smooth={true}
      duration={800}
      offset={-20}
      css={{
        paddingRight: space[2],
        paddingLeft: space[2],
        cursor: 'pointer',
        transition: 'opacity 0.15s ease-out',
        '&:hover, &.active': {
          borderBottom: '1px solid',
          borderImage: `linear-gradient(to right, ${colors.orange[200]}, ${colors.orange[400]}) 1 / 0 0 1px / 0.2em`,
          opacity: 0.8,
        },
      }}
      {...props}
    />
  );
};

export default ScrollLink;
