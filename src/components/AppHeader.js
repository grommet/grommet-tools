import React from 'react';
import {
  Header,
  Anchor,
  TextInput,
  Box,
  Button,
  ResponsiveContext,
} from 'grommet';
import { Grommet as GrommetIcon, Search } from 'grommet-icons';

const AppHeader = () => (
  <Header height="xsmall">
    <Box justify="start" direction="row" gap="small">
      <Box margin={{ left: 'medium' }} align="center">
        <GrommetIcon size="customSmall" color="brand" />
      </Box>
      <Anchor margin="xsmall" href="#" label="Grommet Tools" />
    </Box>

    <ResponsiveContext>
      {(responsive) =>
        responsive === 'small' ? (
          <Box direction="row" justify="end" round>
            <Button margin="xsmall" type="submit">
              <Search />
            </Button>
          </Box>
        ) : (
          <Box background="lightGrey" direction="row" justify="center" round>
            <TextInput
              plain
              a11yTitle="search bar"
              placeholder="Search Tools"
            />
            <Button type="submit" margin={{ right: 'small', top: 'xsmall' }}>
              <Search />
            </Button>
          </Box>
        )
      }
    </ResponsiveContext>

    <Box margin={{ right: 'large' }} justify="end" direction="row" gap="medium">
      <Anchor href="#" label="Grommet" />
      <Anchor href="#" label="Feedback" />
    </Box>
  </Header>
);
export default AppHeader;
