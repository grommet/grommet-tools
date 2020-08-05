import React from 'react';

import { Grid, ResponsiveContext } from 'grommet';
import {
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
} from 'grommet-icons';
import { GridCard } from '../index.js';

const HomeGrid = () => (
  <ResponsiveContext.Consumer>
    {(responsive) => (
      <Grid
        columns={
          responsive === 'large'
            ? { count: 3, size: 'medium' }
            : responsive === 'medium'
            ? { count: 'fill', size: 'medium' }
            : { count: 1, size: 'small' }
        }
        gap="large"
        rows="auto"
        margin={{
          horizontal: responsive === 'small' ? 'medium' : 'xlarge',
          top: 'small',
          bottom: '-30px',
        }}
        alignSelf={
          responsive === 'small' || responsive === 'xsmall' ? 'center' : null
        }
      >
        <GridCard
          icon={<ClearOption color="DesignerYellow" size="xlarge" />}
          heading="Designer"
          buttonName="Open Designer"
          buttonColor="DesignerYellow"
          learnLink="/designer"
          a11yTitle="learn more about Designer"
          openLink="https://designer.grommet.io/"
          text="Easily create experiences in a simple, 
          straightforward approach to building your application."
        />
        <GridCard
          icon={<Configure size="xlarge" color="ThemerOrange" />}
          heading="Themer"
          buttonName="Open Themer"
          buttonColor="ThemerOrange"
          a11yTitle="learn more about Themer"
          openLink="https://theme-designer.grommet.io/"
          text="Create Grommet themes by changing colors, fonts, 
          and sizing to personalize your apps."
          learnLink="/themer"
        />
        <GridCard
          icon={<Camera size="xlarge" color="ImagerOrange" />}
          heading="Images"
          buttonName="Open Images"
          buttonColor="ImagerOrange"
          a11yTitle="learn more about Images"
          openLink="https://images.grommet.io/"
          learnLink="/images"
          text="Super simple image file hosting for your 
          Grommet-based projects."
        />
        <GridCard
          icon={<CloudUpload size="xlarge" color="PublisherPink" />}
          heading="Publisher"
          buttonName="Open Publisher"
          buttonColor="PublisherPink"
          a11yTitle="learn more about Publisher"
          openLink="https://publisher.grommet.io/"
          learnLink="/publisher"
          text="Think lightweight CMS, Markdown, and some 
          Grommet to make it all come together."
        />
        <GridCard
          icon={<Selection size="xlarge" color="SlidesBlue" />}
          heading="Slides"
          buttonName="Open Slides"
          buttonColor="SlidesBlue"
          learnLink="/Slides"
          a11yTitle="learn more about Slides"
          openLink="https://slides.grommet.io/"
          text="Similar to the Publisher by using Markdown 
          and some shortcuts to make presenting easy."
        />
        <GridCard
          icon={<BarChart size="xlarge" color="TabularGreen" />}
          heading="Tabular"
          buttonName="Open Tabular"
          buttonColor="TabularGreen"
          a11yTitle="learn more about Tabular"
          openLink="https://tabular.grommet.io/"
          text="Uses API or data sources for tables and 
          integrates Grommet with the Grommet Designer."
          learnLink="/tabular"
        />
      </Grid>
    )}
  </ResponsiveContext.Consumer>
);

export { HomeGrid };
