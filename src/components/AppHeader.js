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
              a11yTitle="Navigation Menu"
              justifyContent="end"
              dropProps={{ align: { top: 'bottom', right: 'right' } }}
              icon={<MenuIcon color="brand" size="customSmall" />}
              pad="small"
              items={[
                { label: <Box pad="small">Grommet Tools </Box>, href: '/' },
                {
                  label: <Box pad="small">Grommet.io</Box>,
                  href: 'https://v2.grommet.io',
                },
                {
                  label: <Box pad="small">Feedback</Box>,
                  href: '/feedback',
                },
              ]}
            />
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
            <Anchor
              href="https://v2.grommet.io/"
              label="Grommet.io"
              target="_blank"
            />
            <Anchor href="/feedback" label="Feedback" />
          </Box>
        </Header>
      )
    }
  </ResponsiveContext.Consumer>
);
export { AppHeader };
