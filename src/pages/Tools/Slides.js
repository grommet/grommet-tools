import React from 'react';
import { Box, Main } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import {
  AppHeader,
  ToolHeader,
  ToolFooter,
  CapabilitiesLeft,
  Description,
  RotatedIcon,
} from '../../components';

const Slides = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={
          <RotatedIcon rotate="rotate(90deg)" margin="0px 3px 0px -3px">
            <Selection size="xxlarge" color="SlidesBlue" />
          </RotatedIcon>
        }
        icon1={<Camera opacity="0.6" size="customLarge" color="ImagerOrange" />}
        icon2={
          <ClearOption
            opacity="0.7"
            size="customLarge"
            color="DesignerYellow"
          />
        }
        icon3={
          <CloudUpload opacity="0.5" size="customLarge" color="PublisherPink" />
        }
        icon4={
          <Configure opacity="0.4" size="customLarge" color="ThemerOrange" />
        }
        icon5={
          <BarChart opacity="0.3" size="customLarge" color="TabularGreen" />
        }
        title="Slides"
        content="Grommet Designer is a tool used to build experiences with Grommet
       components; then publish and share your ideas with a simple wysiwg
       interface"
        open="Open Slides"
        link="https://slides.grommet.io/"
        color="SlidesBlue"
      />
      <Description
        title="What is Slides?"
        content="A free, web-based WSIWG component editor, Grommet Designer is a
        themeable experience designer baked on top of react and java
        framework. See some examples from Grommet designers below."
        color="SlidesBlue"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={[
          'Deisgner File Name',
          'Deisgner File Name',
          'Deisgner File Name',
        ]}
      />

      <CapabilitiesLeft
        mainContent="Slides provides a space to quickly generate and publish 
        content in minutes. Import a theme, logo, and add copyright details 
        directly to your page."
        subContent="Just a few of Slides’ powerful capabilities include using 
        markup language to quickly create content, easily importing and using 
        a theme, and being able to publish and share a URL with anyone."
        mainImage="SlidesGremlin.svg"
        mainLabel="Gremlin with Slides Icon"
        images={['Designer_4.svg', 'Designer_5.svg', 'Designer_6.svg']}
        labels={[
          'Use Markup language to quickly generate content',
          'Easily import and use theme',
          'Publish and share URL with anyone in just a couple clicks',
        ]}
      />

      <ToolFooter
        backgroundColor="SlidesBlue"
        headingText="Start Using Slides Now"
        description="Open the Slides tool and get started by watching a 
        tutorial or just jumping right in to your first publication."
        buttonLabel="Open Slides"
        direction="column"
      />
    </Main>
  </Box>
);

export default Slides;
