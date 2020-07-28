import React from 'react';

import { Grid } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';

import GridCard from './GridCard.js';

const HomeGrid = () => (
  <Grid
    columns={{ count: 'fill', size: 'medium' }}
    gap="medium"
    rows="auto"
    margin={{ horizontal: 'xlarge', top: 'small', bottom: '-30px' }}
  >
    <GridCard
      icon={<ClearOption color="DesignerYellow" size="xlarge" />}
      heading="Designer"
      buttonName="Open Designer"
      buttonColor="DesignerYellow"
      learnLink="/Designer"
      openLink="https://designer.grommet.io/"
      text="Grommet web-based WSIWG component editor. Use
      pubilshed themes by entering the URL in the context
      of editing the design details."
    />
    <GridCard
      icon={<Configure size="xlarge" color="ThemerOrange" />}
      heading="Themer"
      buttonName="Open Themer"
      buttonColor="ThemerOrange"
      openLink="https://theme-designer.grommet.io/"
      text="Grommet web-based WSIWG component editor. Use
      pubilshed themes by entering the URL in the context
      of editing the design details."
    />
    <GridCard
      icon={<Camera size="xlarge" color="ImagerOrange" />}
      heading="Images"
      buttonName="Open Images"
      buttonColor="ImagerOrange"
      openLink="https://images.grommet.io/"
      text="  Super simple image hosting for your Grommet-based
      projects. Works great with Publisher, Slides, and
      Designer."
    />
    <GridCard
      icon={<CloudUpload size="xlarge" color="PublisherPink" />}
      heading="Publisher"
      buttonName="Open Publisher"
      buttonColor="PublisherPink"
      openLink="https://publisher.grommet.io/"
      text="Think one part lightweight CMS,
      one part Markdown, and some special sauce
      from Grommet to make it all come together."
    />
    <GridCard
      icon={<Selection size="xlarge" color="SlidesBlue" />}
      heading="Slides"
      buttonName="Open Slides"
      buttonColor="SlidesBlue"
      learnLink="/Slides"
      openLink="https://slides.grommet.io/"
      text="Similar to the Grommet Publisher and using
      Markdown and some shortcuts to make presenting easy,
      Slides makes presentations a breeze."
    />
    <GridCard
      icon={<BarChart size="xlarge" color="TabularGreen" />}
      heading="Tabular"
      buttonName="Open Tabular"
      buttonColor="TabularGreen"
      openLink="https://tabular.grommet.io/"
      text="  If you need a table and have an API or data source,
      choose your columns and create content that is integrated
      with Grommet and the Grommet Designer."
    />
  </Grid>
);

export default HomeGrid;
