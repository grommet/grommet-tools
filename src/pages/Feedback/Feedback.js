import React from 'react';
import {
  Grommet,
  Anchor,
  Box,
  Paragraph,
  Grid,
  Card,
  Heading,
  Image,
  Main,
} from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
  Github,
  Slack,
} from 'grommet-icons';
import { grommetToolsTheme } from '../../theme.js';
import AppHeader from '../../components/AppHeader.js';

const Feedback = (props) => (
  <Grommet background="gradient" className="App" theme={grommetToolsTheme}>
    <AppHeader />

    <Box
      align="center"
      margin={{
        left: 'xlarge',
      }}
    >
      <Heading
        margin={{
          top: 'xlarge',
          right: 'xlarge',
          bottom: 'large',
        }}
        size="customLarge"
      >
        Feedback
      </Heading>

      <Grid
        alignContent="center"
        columns={{ count: 'fill', size: 'medium' }}
        rows="auto"
        gap="xlarge"
      >
        <Box>
          <Anchor
            color="black"
            size="xlarge"
            href="#"
            icon={<Github />}
            label="Share feedback on Github"
          />

          <Paragraph fill={true} pad={{ right: 'large' }}>
            Submit feedback on Grommet Tools on Github. Here, you can help
            improve the tools and connect with other Grommet Tools lovers.
          </Paragraph>

          <Box pad={{ right: 'large' }}>
            <Grid
              columns="small"
              gap={{ row: 'medium', column: 'medium' }}
              rows="auto"
            >
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<ClearOption />}
                  label="Designer / Github"
                />
              </Card>
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<CloudUpload />}
                  label="Publisher / Github"
                />
              </Card>
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<Configure />}
                  label="Themer / Github"
                />
              </Card>
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<Camera />}
                  label="Imager / Github"
                />
              </Card>
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<BarChart />}
                  label="Tabular / Github"
                />
              </Card>
              <Card width="medium" background="white">
                <Anchor
                  color="black"
                  alignSelf="center"
                  margin="xsmall"
                  href="#"
                  icon={<Selection />}
                  label="Slides / Github"
                />
              </Card>
            </Grid>
          </Box>
        </Box>

        <Box>
          <Anchor
            color="black"
            size="xlarge"
            href="#"
            icon={<Slack />}
            label="Join Grommet's Slack Channel"
          />
          <Paragraph fill={true} margin={{ right: 'small' }}>
            Contribute to the discussion about Grommet and Grommet Tools and see
            what others are up to by joining the Slack channel.
          </Paragraph>

          <Card width="small" background="white">
            <Anchor
              color="black"
              alignSelf="center"
              margin="xsmall"
              href="#"
              icon={<Slack />}
              label="Grommet / Slack"
            />
          </Card>

          <Box width="xlarge">
            <Image
              width="xlarge"
              fill="horizontal"
              alignSelf="end"
              fit="fill"
              src="GremlinFaceMask.svg"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  </Grommet>
);

export default Feedback;
