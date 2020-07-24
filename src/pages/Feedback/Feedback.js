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
  {
    icon: <ClearOption />,
    label: 'Designer / Github',
    link: 'https://github.com/grommet/grommet-designer',
  },
  {
    icon: <CloudUpload />,
    label: 'Publisher / Github',
    link: 'https://github.com/grommet/grommet-publisher',
  },
  {
    icon: <Configure />,
    label: 'Themer / Github',
    link: 'https://github.com/grommet/grommet-theme-designer',
  },
  {
    icon: <Camera />,
    label: 'Imager / Github',
    link: 'https://github.com/grommet/grommet-images',
  },
  {
    icon: <BarChart />,
    label: 'Tabular / Github',
    link: 'https://github.com/grommet/grommet-tabular',
  },
  {
    icon: <Selection />,
    label: 'Slides / Github',
    link: 'https://github.com/grommet/grommet-slides',
  },
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
        level={1}
        margin={{
          top: 'xlarge',
          right: 'xlarge',
          bottom: 'large',
        }}
        size="xlarge"
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
          <Heading size="small">
            <Github color="headingGrey" /> Share feedback on Github
          </Heading>

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
                    alignSelf="center"
                    margin="xsmall"
                    href={item.link}
                    icon={item.icon}
                    label={item.label}
                  />
                </Card>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box>
          <Heading size="small">
            <Slack color="headingGrey" /> Join Grommet's Slack Channel
          </Heading>
          <Paragraph fill={true} margin={{ right: 'small' }}>
            Contribute to the discussion about Grommet and Grommet Tools and see
            what others are up to by joining the Slack channel.
          </Paragraph>

          <Card width="small" background="white">
            <Anchor
              alignSelf="center"
              margin="xsmall"
              href="http://slackin.grommet.io/"
              icon={<Slack />}
              label="Grommet / Slack"
            />
          </Card>

          <Box width="xlarge">
            <Image
              a11yTitle="Gremlin with a Face Mask"
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
