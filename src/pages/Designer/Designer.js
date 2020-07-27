import React from 'react';
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Main,
  ResponsiveContext,
} from 'grommet';
import AppHeader from '../../components/AppHeader.js';
import HeadingLarge from './HeadingLarge.js';
import HeadingSmall from './HeadingSmall.js';
import ScreenshotCard from '../../components/ScreenshotCard.js';

const Designer = () => (
  <Box>
    <AppHeader />
    <Main>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === 'large' || responsive === 'xlarge' ? (
            <HeadingLarge />
          ) : (
            <HeadingSmall />
          )
        }
      </ResponsiveContext.Consumer>
      <Box
        background="YellowBackground"
        margin={{
          top: 'xlarge',
        }}
      >
        <Box
          margin={{
            top: 'xlarge',
            horizontal: 'xlarge',
            bottom: 'medium',
          }}
        >
          <Heading size="large" margin={{ top: 'xlarge', bottom: 'none' }}>
            What is the Designer?
          </Heading>
          <Box width="large" margin={{ bottom: 'medium', top: 'none' }}>
            <Paragraph fill={true} size="xxlarge">
              A free, web-based WSIWG component editor, Grommet Designer is a
              themeable experience designer baked on top of react and java
              framework. See some examples from Grommet designers below.
            </Paragraph>
          </Box>
          <Box
            direction="row-responsive"
            justify="center"
            gap="medium"
            margin={{ top: 'large', bottom: '-160px' }}
          >
            <ScreenshotCard
              src="Designer_1.svg"
              label="Deisgner File Name"
              a11yTitle="Screenshot of Designer Tool"
            />
            <ScreenshotCard
              src="Designer_2.svg"
              label="Deisgner File Name"
              a11yTitle="Screenshot of Designer Tool"
            />
            <ScreenshotCard
              src="Designer_3.svg"
              label="Deisgner File Name"
              a11yTitle="Screenshot of Designer Tool"
            />
          </Box>
        </Box>
      </Box>

      <Box height="small"></Box>
      <Box margin={{ top: 'xlarge', horizontal: 'xlarge' }}>
        <Box direction="row-responsive">
          <Box margin={{ right: 'large' }}>
            <Heading size="large" margin={{ bottom: 'none', top: 'xlarge' }}>
              Capabilities
            </Heading>
            <Box width="medium">
              <Paragraph size="large" color="darkGrey" fill>
                The Designer puts the power in your hands to create sites with
                built in theming, while leveraging the full extent of grommet’s
                components and props.
              </Paragraph>
              <Paragraph size="large" fill>
                Open the Designer tool and get started by watching a tutorial or
                just jumping right in to your first design. Open the Designer
                tool and get started by watching a tutorial or just jumping
                right in to your first design.
              </Paragraph>
            </Box>
          </Box>
          <Box
            alignSelf="end"
            align="end"
            margin={{ left: 'xlarge', top: 'medium' }}
          >
            <Box>
              <Image
                a11yTitle="Gremlin Holding a Laptop"
                alignSelf="end"
                src="gremlin_laptop.svg"
                fill="horizontal"
                fit="contain"
              />
            </Box>
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          justify="center"
          margin={{ top: 'xlarge' }}
          gap="large"
        >
          <ScreenshotCard
            src="Designer_4.svg"
            label="Creating in Light and Dark modes"
            a11yTitle="Screenshot of Designer Tool"
          />
          <ScreenshotCard
            src="Designer_5.svg"
            label="Importing your own theme"
            a11yTitle="Screenshot of Designer Tool"
          />
          <ScreenshotCard
            src="Designer_6.svg"
            label="Easy publishing"
            a11yTitle="Screenshot of Designer Tool"
          />
        </Box>
      </Box>
      <Box height="xsmall"></Box>
      <Box background="YellowBackground" pad="large">
        <Box
          margin={{ top: 'large', bottom: 'medium' }}
          alignSelf="center"
          width="DesignerStart"
        >
          <Heading size="small" margin="xsmall" alignSelf="center">
            Start Using the Designer Now
          </Heading>
          <Paragraph
            textAlign="center"
            size="large"
            margin="small"
            alignSelf="center"
          >
            Open the Designer tool and get started by watching a tutorial or
            just jumping right in to your first design.
          </Paragraph>
        </Box>
        <Button
          margin={{ bottom: 'small' }}
          primary
          alignSelf="center"
          href="https://designer.grommet.io/"
          color="white"
          label="Open Designer"
        />
      </Box>
      <Box pad="xsmall" background="gradient" />
    </Main>
  </Box>
);

export default Designer;
