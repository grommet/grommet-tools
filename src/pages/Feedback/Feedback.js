import React from 'react';
import { Anchor, Box, Paragraph, Grid, Card, Heading, Image } from 'grommet';
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
import AppHeader from '../../components/AppHeader.js';

const githubCards = [
  { icon: <ClearOption />, label: 'Designer / Github' },
  { icon: <CloudUpload />, label: 'Publisher / Github' },
  { icon: <Configure />, label: 'Themer / Github' },
  { icon: <Camera />, label: 'Imager / Github' },
  { icon: <BarChart />, label: 'Tabular / Github' },
  { icon: <Selection />, label: 'Slides / Github' },
];

const Feedback = (props) => (
  <Box background="gradient">
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

          <Paragraph fill pad={{ right: 'large' }}>
            Submit feedback on Grommet Tools on Github. Here, you can help
            improve the tools and connect with other Grommet Tools lovers.
          </Paragraph>

          <Box pad={{ right: 'large' }}>
            <Grid
              columns="small"
              gap={{ row: 'medium', column: 'medium' }}
              rows="auto"
            >
              {githubCards.map((item) => (
                <Card width="medium" background="white">
                  <Anchor
                    color="black"
                    alignSelf="center"
                    margin="xsmall"
                    href="#"
                    icon={item.icon}
                    label={item.label}
                  />
                </Card>
              ))}
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
  </Box>
);

export default Feedback;
