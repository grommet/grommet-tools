import React from 'react';
import { Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';

const AppHeader = () => (
  <ResponsiveContext.Consumer>
    {(responsive) =>
      responsive === 'small' || responsive === 'xsmall' ? (
        <Header height="xsmall">
          <Box
            margin={{ left: 'large' }}
            align="start"
            onClick={() => {
              window.open('/', '_self');
            }}
          >
            <GrommetIcon size="customSmall" color="brand" />
          </Box>
          <Box alignSelf="end" margin="large">
            <Menu
              icon={<MenuIcon color="brand" size="customSmall" />}
              items={[
                { label: 'Grommet Tools', href: '/' },
                { label: 'Grommet.io', href: 'https://v2.grommet.io' },
                { label: 'Feedback', href: '/feedback' },
              ]}
              margin={{ top: 'none' }}
            ></Menu>
          </Box>
        </Header>
      ) : (
        <Header height="xsmall">
          <Box justify="start" direction="row" gap="small">
            <Box
              margin={{ left: 'medium' }}
              align="center"
              onClick={() => {
                window.open('/', '_self');
              }}
            >
              <GrommetIcon size="customSmall" color="brand" />
            </Box>
            <Anchor margin="xsmall" href="/" label="Grommet Tools" />
          </Box>

          <Box
            margin={{ right: 'large' }}
            justify="end"
            direction="row"
            gap="medium"
          >
            <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
            <Anchor href="/feedback" label="Feedback" />
          </Box>
        </Header>
      )
    }
  </ResponsiveContext.Consumer>
);
export { AppHeader };
