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

const Designer = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={<ClearOption size="xxlarge" color="DesignerYellow" />}
        icon1={<Camera opacity="0.6" size="customLarge" color="ImagerOrange" />}
        icon2={
          <Configure opacity="0.7" size="customLarge" color="ThemerOrange" />
        }
        icon3={
          <CloudUpload opacity="0.5" size="customLarge" color="PublisherPink" />
        }
        icon4={
          <RotatedIcon rotate="rotate(90deg)">
            <Selection opacity="0.4" size="customLarge" color="SlidesBlue" />
          </RotatedIcon>
        }
        icon5={
          <BarChart opacity="0.3" size="customLarge" color="TabularGreen" />
        }
        title="Designer"
        content="Grommet Designer is a tool used to build experiences with Grommet
       components; then publish and share your ideas with a simple wysiwg
       interface"
        open="Open Designer"
        link="https://designer.grommet.io/"
        color="DesignerYellow"
      />
      <Description
        title="What is the Designer?"
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
        buttonHref="https://designer.grommet.io"
      />
    </Main>
  </Box>
);

export default Designer;
