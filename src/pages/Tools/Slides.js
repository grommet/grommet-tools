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
        content="Grommet Slides is a tool used to build simple and beautiful 
        slide shows. Quickly generate content, add a theme, and present or 
        share slides with anyone."
        open="Open Slides"
        link="https://slides.grommet.io/"
        color="SlidesBlue"
      />
      <Description
        title="What is Grommet Slides?"
        content="A free, web-based slides builder, Grommet Slides combines the 
        freedom of markup language with the efficiency of thematic branding. 
        See examples of Slides below."
        color="SlidesBlue"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={['Slides File Name', 'Slides File Name', 'Slides File Name']}
      />

      <CapabilitiesLeft
        mainContent="Slides provides a space to quickly generate and publish 
        slides in minutes. Import a theme, generate slides and add content, 
        and then present slideshow."
        subContent="Just a few of Slides’ powerful capabilities include using 
        markup language to quickly create content, easily importing and using 
        a theme, and being able to publish and share a URL with anyone."
        mainImage="SlidesGremlin.svg"
        mainLabel="Gremlin with Slides Icon"
        images={['Slides_4.svg', 'Designer_5.svg', 'Slides_6.svg']}
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
