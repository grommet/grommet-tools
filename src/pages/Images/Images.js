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
import AppHeader from '../../components/AppHeader.js';
import ToolHeader from '../../components/common/ToolHeader.js';
import ToolFooter from '../../components/common/ToolFooter.js';
import CapabilitiesLeft from '../../components/common/CapabilitiesLeft.js';
import Description from '../../components/common/Description.js';
import RotatedIcon from '../../components/common/RotatedIcon.js';

const Images = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={<Camera size="xxlarge" color="ImagerOrange" />}
        icon1={
          <RotatedIcon rotate="rotate(90deg)">
            <Selection opacity="0.8" size="large" color="SlidesBlue" />
          </RotatedIcon>
        }
        icon2={
          <ClearOption opacity="0.9" size="large" color="DesignerYellow" />
        }
        icon3={<CloudUpload opacity="0.7" size="large" color="PublisherPink" />}
        icon4={<Configure opacity="0.5" size="large" color="ThemerOrange" />}
        icon5={<BarChart opacity="0.3" size="large" color="TabularGreen" />}
        title="Images"
        content="Grommet Images is a tool used to host 
        images and videos. Easily upload and use 
        seamlessly with all Grommet Tools."
        open="Open Images"
        link="https://images.grommet.io/"
        color="ImagerOrange"
      />
      <Description
        title="What is Images?"
        content="A free, web-based image host, Grommet Images is 
        a storage and distribution platform. Grommet Images 
        supports image, video, and gif files. See some 
        examples from Grommet Images below."
        color="ImagerOrange"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={['Images File Name', 'Images File Name', 'Images File Name']}
      />

      <CapabilitiesLeft
        mainContent="Grommet Images puts the power in your hands to upload 
        visual files in any format and manage them to aide in creating in 
        any Grommet Tool."
        subContent="Just a few of Grommet Images’ capabilities include 
        supporting image, video, and gif formats, the ability to use the 
        image URL for use across the Grommet Tools ecosystem, and an 
        easy-going UI."
        mainImage="ImagesGremlin.svg"
        mainLabel="Gremlin with Images Icon"
        images={['Images_4.svg', 'Images_5.svg', 'Images_6.svg']}
        labels={[
          'Supports images, videos, and gifs',
          'Able to use image URl across all Grommet Tools',
          'Simple UI to manage files',
        ]}
      />

      <ToolFooter
        backgroundColor="ImagerOrange"
        headingText="Start Using Images Now"
        description="Open the Slides tool and get started by watching a 
        tutorial or just jumping right in to your first publication."
        buttonLabel="Open Images"
        direction="column"
      />
    </Main>
  </Box>
);

export default Images;
