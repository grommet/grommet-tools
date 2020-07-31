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
  CapabilitiesRight,
  Description,
} from '../../components';

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
        title="Themer"
        content="Grommet Themer is a tool used to build themes with specified features
        such as colors and fonts; then publish and distrubite them across multiple Grommet
        projects."
        open="Open Themer"
        link="https://theme-designer.grommet.io/"
        color="ThemerOrange"
      />
      <Description
        title="What is the Themer?"
        content=" A free, web-based theme designer, Grommet Themer builds themes that
        specify all visual branding features: typography, color, and more. Share and
        distribute themes by publishing and generating a unique URL."
        color="ThemerOrange"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={['Themer File Name', 'Themer File Name', 'Themer File Name']}
      />

      <CapabilitiesRight
        mainContent="The Themer has the power to provide visual
        consistency to all of your projects.
         No need to repeat yourself; create a theme once and use
         it everywhere. "
        subContent="Just a few of the Themer’s capabilities include
        the abilty to publish and distribute your theme with a unique URL,
        specify details like rounding, spacing, and font scale, and define
        all colors and fonts."
        mainImage="ThemerLaptop.svg"
        mainLabel="Gremlin Holding a Publisher Icon"
        images={['Themer_1.svg', 'Themer_2.svg', 'Themer_3.svg']}
        labels={[
          'Distribute themes to use with multiple projects',
          'Specify rounding, base spacing, & font scale',
          'Define all colors & fonts to maintain consistency ',
        ]}
      />

      <ToolFooter
        backgroundColor="ThemerOrange"
        headingText="Start Using the Themer"
        description="Open the Themer tool and get started by watching a tutorial or
        just jumping right in to your first design."
        buttonLabel="Open Themer"
        buttonHref="https://theme-designer.grommet.io"
        direction="column"
      />
    </Main>
  </Box>
);

export default Themer;
