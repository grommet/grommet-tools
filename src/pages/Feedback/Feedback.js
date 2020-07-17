import React from 'react';
import {
  Grommet,
  Anchor,
  Box,
  Paragraph,
  Grid,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
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
  <Grommet className="App" theme={grommetToolsTheme}>
    <AppHeader />
    <Box fill="horizontal" background="gradient">
      <Heading
        margin={{
          top: 'marginXL',
          left: 'xlarge',
          right: 'xlarge',
          bottom: 'none',
        }}
        size="customLarge"
      >
        Feedback
      </Heading>

      <Box
        margin={{
          left: 'xlarge',
          // right: 'xlarge',
        }}
        // fill='horizontal'
        // direction='row'
        // justify='between'
      >
        <Grid
          alignContent="center"
          // columns='500px'
          columns={{ count: 'fit', size: '500px' }}
          rows="auto"
          gap="large"
          // margin='large'
        >
          <Box
          // margin={{
          // left: 'xlarge',
          // right: 'xlarge',
          // }}
          // width='430px'
          >
            <Anchor
              size="xlarge"
              href="#"
              icon={<Github />}
              label="Share feedback on Github"
            />

            <Paragraph size="large">
              Submit feedback on Grommet Tools on Github. Here, you can help
              improve the tools and connect with other Grommet Tools lovers.
            </Paragraph>

            <Box width="430px">
              <Grid
                columns="small"
                // width='small'
                // gap="medium"
                gap={{ row: 'medium', column: 'xsmall' }}
                rows="auto"
                // margin={{ horizontal: 'small', vertical: 'small' }}
              >
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <ClearOption color="DesignerYellow" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <CloudUpload color="PublisherPink" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Configure color="ThemerOrange" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Camera color="ImagerOrange" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <BarChart color="TabularGreen" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Selection color="SlidesBlue" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
              </Grid>
            </Box>
          </Box>

          <Box>
            <Anchor
              size="xlarge"
              href="#"
              icon={<Slack />}
              label="Join Grommet's Slack Channel"
            />
            <Paragraph size="large">
              Contribute to the discussion about Grommet and Grommet Tools and
              see what others are up to by joining the Slack channel.
            </Paragraph>

            <Card width="small" background="white">
              <CardHeader alignSelf="center">
                <ClearOption color="DesignerYellow" size="large" />
              </CardHeader>
              <CardBody alignSelf="center">
                <Paragraph textAlign="center">Designer / Github</Paragraph>
              </CardBody>
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
  </Grommet>
);

export default Feedback;
