import React from 'react';
import { Header, Anchor, Box } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

const AppHeader = () => (
  <Header height="xsmall">
    <Box justify="start" direction="row" gap="small">
      <Box margin={{ left: 'medium' }} align="center">
        <GrommetIcon size="customSmall" color="brand" />
      </Box>
      <Anchor margin="xsmall" href="/" label="Grommet Tools" />
    </Box>

    <Box margin={{ right: 'large' }} justify="end" direction="row" gap="medium">
      <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
      <Anchor href="/feedback" label="Feedback" />
    </Box>
  </Header>
);
export { AppHeader };
