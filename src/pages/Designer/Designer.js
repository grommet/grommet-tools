import React from 'react';
import { Box, Heading, Paragraph, Main } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import AppHeader from '../../components/AppHeader.js';
import ToolHeader from '../../components/common/ToolHeader.js';
import ScreenshotCard from '../../components/ScreenshotCard.js';
import ToolFooter from '../../components/common/ToolFooter.js';
import CapabilitiesLeft from '../../components/common/CapabilitiesLeft.js';

const Designer = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={<ClearOption size="xxlarge" color="DesignerYellow" />}
        icon1={<Camera opacity="0.8" size="large" color="ImagerOrange" />}
        icon2={<Configure opacity="0.9" size="large" color="ThemerOrange" />}
        icon3={<CloudUpload opacity="0.7" size="large" color="PublisherPink" />}
        icon4={<Selection opacity="0.5" size="large" color="SlidesBlue" />}
        icon5={<BarChart opacity="0.3" size="large" color="TabularGreen" />}
        title="Designer"
        content="Grommet Designer is a tool used to build experiences with Grommet
       components; then publish and share your ideas with a simple wysiwg
       interface"
        open="Open Designer"
        link="https://designer.grommet.io/"
        color="DesignerYellow"
      />
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

      <CapabilitiesLeft
        mainContent="The Designer puts the power in your hands to create sites with
        built in theming, while leveraging the full extent of grommet’s
        components and props."
        subContent="Just a few of the Designer’s capabilities include 
        seamlessly designing in both Light and Dark modes, 
        importing themes from the Grommet Tools Themer, 
        and publishing your designs to share with others."
        mainImage="gremlin_laptop.svg"
        mainLabel="Gremlin Holding a Laptop"
        images={['Designer_4.svg', 'Designer_5.svg', 'Designer_6.svg']}
        labels={[
          'Creating in Light and Dark modes',
          'Importing your own theme',
          'Easy publishing',
        ]}
      />

      <ToolFooter
        backgroundColor="YellowBackground"
        headingText="Start Using the Designer Now"
        description="Open the Designer tool and get started by watching a tutorial or
        just jumping right in to your first design."
        buttonLabel="Open Designer"
        direction="column"
      />
    </Main>
  </Box>
);

export default Designer;
