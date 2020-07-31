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
import { AppHeader, RotatedIcon } from '../components';

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
    icon: (
      <RotatedIcon rotate="rotate(90deg)">
        <Selection />
      </RotatedIcon>
    ),
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
                <Card
                  key={item.label}
                  onClick={() => {
                    window.open(item.link, '_self');
                  }}
                  background="white"
                  pad="xsmall"
                  direction="row"
                  width={{ max: '200px' }}
                >
                  <CardBody direction="row">
                    {item.icon} &nbsp;
                    <Text textAlign="center">
                      <b>{item.label}</b> Github
                    </Text>
                  </CardBody>
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

          <Card
            onClick={() => {
              window.open('http://slackin.grommet.io/', '_self');
            }}
            background="white"
            pad="xsmall"
            direction="row"
            width="small"
          >
            <CardBody direction="row">
              <Grommet /> &nbsp;
              <Text textAlign="center">
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
    </Box>
  </Box>
);

export default Feedback;
