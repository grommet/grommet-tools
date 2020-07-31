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
  RotatedIcon,
} from '../../components';

const Tabular = () => (
  <Box>
    <AppHeader />
    <Main>
      <ToolHeader
        mainIcon={<BarChart size="xxlarge" color="TabularGreen" />}
        icon1={<Camera opacity="0.6" size="customLarge" color="ImagerOrange" />}
        icon2={
          <Configure opacity="0.7" size="customLarge" color="ThemerOrange" />
        }
        icon3={
          <CloudUpload opacity="0.5" size="customLarge" color="PublisherPink" />
        }
        icon4={
          <ClearOption
            opacity="0.4"
            size="customLarge"
            color="DesignerYellow"
          />
        }
        icon5={
          <RotatedIcon rotate="rotate(90deg)" margin="0px 0px 0px 0px">
            <Selection opacity="0.3" size="customLarge" color="SlidesBlue" />
          </RotatedIcon>
        }
        title="Tabular"
        content="Grommet Tabular is a tool used to build tables using data. Import a
        URL of JSON based on an endpoint, then customize the data to build endless table
        variations."
        open="Open Tabular"
        link="https://tabular.grommet.io/"
        color="TabularGreen"
      />
      <Description
        title="What is the Tabular?"
        content="A free, web-based table generator, Grommet Tabular is a
        customizable experienceof customizing API or data sources or tables by
        integrating Gromemt with the Grommet Designer . See examples below."
        color="TabularGreen"
        images={['Designer_1.svg', 'Designer_2.svg', 'Designer_3.svg']}
        labels={['Tabular File Name', 'Tabular File Name', 'Tabular File Name']}
      />

      <CapabilitiesRight
        mainContent="Tabular has the power to quickly and consistency
        build tables for any data set. Just provide the URL of a JSON
        endpoint and see what it has to offer."
        subContent="Just a few of the Tabular’s capabilities include
        the ability to interact with any data set as a table and being
        able to add, remove and reorder columns to customize the view."
        mainImage="TabularGremlin.svg"
        mainLabel="Laptop with a Tabular icon"
        images={['Tabular_1.svg', 'Tabular_2.svg', 'Tabular_3.svg']}
        labels={[
          'Interact with data set as a table',
          'Simply provide URL of JSON based on endpoint',
          'Add, remove, and reorder columns to customize view',
        ]}
      />

      <ToolFooter
        backgroundColor="TabularGreen"
        headingText="Start Using the Tabular Now"
        description="Open the Tabular tool and get started by watching a tutorial or
        just jumping right in to your first design."
        buttonLabel="Open Tabular"
        buttonHref="https://tabular.grommet.io"
        direction="column"
      />
    </Main>
  </Box>
);

export default Tabular;
