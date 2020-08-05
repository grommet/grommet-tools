import React from 'react';
import {
  Box,
  Paragraph,
  Grid,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  ResponsiveContext,
} from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
  Github,
  Grommet,
  Slack,
} from 'grommet-icons';
import { AppHeader } from '../components';

const githubCards = [
  {
    icon: <ClearOption />,
    label: 'Designer /',
    link: 'https://github.com/grommet/grommet-designer',
  },
  {
    icon: <CloudUpload />,
    label: 'Publisher /',
    link: 'https://github.com/grommet/grommet-publisher',
  },
  {
    icon: <Configure />,
    label: 'Themer /',
    link: 'https://github.com/grommet/grommet-theme-designer',
  },
  {
    icon: <Camera />,
    label: 'Imager /',
    link: 'https://github.com/grommet/grommet-images',
  },
  {
    icon: <BarChart />,
    label: 'Tabular /',
    link: 'https://github.com/grommet/grommet-tabular',
  },
  {
    icon: <Selection />,
    label: 'Slides /',
    link: 'https://github.com/grommet/grommet-slides',
  },
];

const Feedback = (props) => (
  <Box background="gradient">
    <AppHeader />
    <Box
      alignSelf="center"
      margin={{
        horizontal: 'xlarge',
      }}
    >
      <Heading
        level={1}
        margin={{
          top: 'xlarge',
          bottom: 'large',
          horizontal: 'medium',
        }}
        size="xlarge"
      >
        Feedback
      </Heading>
      <ResponsiveContext.Consumer>
        {(responsive) => (
          <Grid
            alignContent="center"
            columns={
              responsive === 'small'
                ? { count: 1, size: 'small' }
                : { count: 'fill', size: 'medium' }
            }
            rows="auto"
            gap="xlarge"
            margin={{ horizontal: 'medium' }}
          >
            <Box>
              <Heading size="small" margin={{ bottom: 'none' }}>
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
                    <Card
                      key={item.label}
                      onClick={() => {
                        window.open(item.link, '_blank', 'noreferrer');
                      }}
                      background="white"
                      pad="xsmall"
                      direction="row"
                      width={{ max: '200px' }}
                    >
                      <CardBody align="center" direction="row">
                        <Box pad="xsmall">{item.icon}</Box>
                        <Text>
                          <b>{item.label}</b> Github
                        </Text>
                      </CardBody>
                    </Card>
                  ))}
                </Grid>
              </Box>
            </Box>

            <Box>
              <Heading size="small" margin={{ bottom: 'none' }}>
                <Slack color="headingGrey" /> Join Grommet's Slack Channel
              </Heading>
              <Paragraph fill margin={{ right: 'small' }}>
                Contribute to the discussion about Grommet and Grommet Tools and
                see what others are up to by joining the Slack channel.
              </Paragraph>

              <Card
                onClick={() => {
                  window.open(
                    'http://slackin.grommet.io/',
                    '_blank',
                    'noreferrer',
                  );
                }}
                background="white"
                pad="xsmall"
                direction="row"
                width="small"
              >
                <CardBody align="center" direction="row">
                  <Box pad="xsmall">
                    <Grommet />
                  </Box>
                  <Text>
                    <b>Grommet /</b> Slack
                  </Text>
                </CardBody>
              </Card>

              <Box width="xlarge">
                <Image
                  a11yTitle="Gremlin with a Face Mask"
                  width="xlarge"
                  fill="horizontal"
                  alignSelf="end"
                  src="GremlinFaceMask.svg"
                />
              </Box>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Box>
  </Box>
);

export default Feedback;
