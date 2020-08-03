import React from 'react';
import { ResponsiveContext } from 'grommet';
import { HeadingLarge, HeadingSmall } from '../index.js';

const ToolHeader = ({ icons, title, content, open, link, color }) => (
  <ResponsiveContext.Consumer>
    {(responsive) =>
      responsive === 'large' || responsive === 'xlarge' ? (
        <HeadingLarge
          icons={icons}
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
