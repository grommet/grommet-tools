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
import CapabilitiesRight from '../../components/common/CapabilitiesRight.js';
import Description from '../../components/common/Description.js';

const Themer = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={<Configure size="xxlarge" color="ThemerOrange" />}
        icon1={<Camera opacity="0.8" size="large" color="ImagerOrange" />}
        icon2={
          <ClearOption opacity="0.9" size="large" color="DesignerYellow" />
        }
        icon3={<CloudUpload opacity="0.7" size="large" color="PublisherPink" />}
        icon4={<Selection opacity="0.5" size="large" color="SlidesBlue" />}
        icon5={<BarChart opacity="0.3" size="large" color="TabularGreen" />}
        title="Publisher"
        content="Grommet Publisher is a tools used to build simple and beautiful documentation.
        Quickly generate content, generate a themer, and share the site URL with anyone in just a few clicks"
        open="Open Publisher"
        link="https://publisher.grommet.io/"
        color="PublisherPink"
      />
      <Description
        tool="Publisher"
        content="A free, web-based documentation generator, the Publisher combines the
        freedom of markup language with the efficiency of built-in text and button components.
         See examples of the Publisher below."
        color="PublisherPink"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={[
          'Publisher File Name',
          'Publisher File Name',
          'Publisher File Name',
        ]}
      />

      <CapabilitiesRight
        mainContent="The Publisher provides a space to quickly generate and publish
        content in minutes. Import a theme, logo, and add copyright details
        directly to your page."
        subContent="Just a few of the Publisher’s powerful capabilities
        include using markup language to quickly create content, easily
        importing and using a theme, and being able to publish and
        share a URL with anyone."
        mainImage="PublisherGremlin.svg"
        mainLabel="Gremlin Holding a Publisher Icon"
        images={['Publisher_1.svg', 'Designer_5.svg', 'Publisher_2.svg']}
        labels={[
          'Use Markup language to quickly generate content',
          'Easily import and use theme',
          'Publish and share URL with anyone in just a couple clicks',
        ]}
      />

      <ToolFooter
        backgroundColor="PublisherPink"
        headingText="Start Using the Publisher Now"
        description="Open the Publisher tool and get started by watching a tutorial or
        just jumping right in to your first design."
        buttonLabel="Open Publisher"
        buttonHref="https://publisher.grommet.io"
        direction="column"
      />
    </Main>
  </Box>
);

export default Themer;
