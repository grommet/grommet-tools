import React from 'react';
import { Box, Heading, Paragraph, Image, Main } from 'grommet';
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
import Description from '../../components/common/Description.js';

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
      <Description
        tool="Designer"
        content="A free, web-based WSIWG component editor, Grommet Designer is a
        themeable experience designer baked on top of react and java
        framework. See some examples from Grommet designers below."
        color="DesignerYellow"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={[
          'Deisgner File Name',
          'Deisgner File Name',
          'Deisgner File Name',
        ]}
      />

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
