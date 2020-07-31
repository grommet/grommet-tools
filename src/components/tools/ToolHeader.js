import React from 'react';
import { ResponsiveContext } from 'grommet';
import { HeadingLarge, HeadingSmall } from '../index.js';

const ToolHeader = ({
  mainIcon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  title,
  content,
  open,
  link,
  color,
}) => (
  <ResponsiveContext.Consumer>
    {(responsive) =>
      responsive === 'large' || responsive === 'xlarge' ? (
        <HeadingLarge
          mainIcon={mainIcon}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
          icon5={icon5}
          title={title}
          content={content}
          open={open}
          link={link}
          color={color}
        />
      ) : (
        <HeadingSmall
          title={title}
          content={content}
          open={open}
          link={link}
          color={color}
        />
      )
    }
  </ResponsiveContext.Consumer>
);
export { ToolHeader };
