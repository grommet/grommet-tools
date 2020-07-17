import React from 'react';
import {
  Header,
  Anchor,
  TextInput,
  Box,
  Button,
  Form,
  FormField,
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
    <Form>
      <Box background="lightGrey" direction="row" justify="center" round>
        <FormField margin={{ bottom: 'none', top: 'none' }} name="search input">
          <TextInput a11yTitle="search bar" placeholder="Search Tools" />
        </FormField>
        <Button type="submit">
          <Search />
        </Button>
      </Box>
    </Form>
    <Box margin={{ right: 'large' }} justify="end" direction="row" gap="medium">
      <Anchor href="#" label="Grommet" />
      <Anchor href="#" label="Feedback" />
    </Box>
  </Header>
);
export default AppHeader;
