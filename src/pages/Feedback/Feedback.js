import React from 'react';
import {
  Grommet,
  Header,
  Main,
  Footer,
  Anchor,
  TextInput,
  Box,
  Paragraph,
  Grid,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormField,
  Heading,
  Image,
  Text,
  ResponsiveContext,
} from 'grommet';
import {
  Grommet as GrommetIcon,
  Search,
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  Selection,
  BarChart,
  FormNextLink,
  Github,
  Slack,
} from 'grommet-icons';
import { grommetToolsTheme } from '../../theme.js';
// import GridCard from './components/GridCard.js';
// import SmallCard from './components/SmallCard.js';

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto'],
  xlarge: ['auto', 'auto'],
};

const rows = {
  small: ['auto', 'auto'],
  medium: ['auto'],
  large: ['auto'],
  xlarge: ['auto'],
};

// const fixedGridAreas = {
//   small: [
//     { name: "github", start: [0, 0], end: [0, 0] },
//     { name: "slack", start: [0, 1], end: [0, 1] },
//     { name: "cards", start: [0, 2], end: [0, 2] },
//     { name: "gremlin", start: [0, 3], end: [0, 3] }
//   ],
//   medium: [
//     { name: "github", start: [0, 0], end: [0, 0] },
//     { name: "slack", start: [1, 0], end: [1, 0] },
//     { name: "cards", start: [0, 1], end: [0, 1] },
//     { name: "gremlin", start: [1, 1], end: [1, 1] }
//   ],
//   large: [
//     { name: "github", start: [0, 0], end: [0, 0] },
//     { name: "slack", start: [1, 0], end: [1, 0] },
//     { name: "cards", start: [0, 1], end: [0, 1] },
//     { name: "gremlin", start: [1, 1], end: [1, 1] }
//   ],
//   xlarge: [
//     { name: "github", start: [0, 0], end: [0, 0] },
//     { name: "slack", start: [1, 0], end: [1, 0] },
//     { name: "cards", start: [0, 1], end: [0, 1] },
//     { name: "gremlin", start: [1, 1], end: [1, 1] }
//   ]
// };

// const Responsive = ({
//   children,
//   overrideColumns,
//   overrideRows,
//   areas,
//   ...props
// }) => (
//   <ResponsiveContext.Consumer>
//     {size => {
//       // Take into consideration if not array is sent but a simple string
//       let columnsVal = columns;
//       if (columns) {
//         if (columns[size]) {
//           columnsVal = columns[size];
//         }
//       }

//       let rowsVal = rows;
//       if (rows) {
//         if (rows[size]) {
//           rowsVal = rows[size];
//         }
//       }

//       // Also if areas is a simple array not an object of arrays for
//       // different sizes
//       let areasVal = areas;
//       if (areas && !Array.isArray(areas)) areasVal = areas[size];

//       return (
//         <Grid
//           {...props}
//           areas={!areasVal ? undefined : areasVal}
//           rows={!rowsVal ? size : rowsVal}
//           columns={!columnsVal ? size : columnsVal}
//         >
//           {children}
//         </Grid>
//       );
//     }}
//   </ResponsiveContext.Consumer>
// );

const Feedback = (props) => (
  <Grommet className="App" theme={grommetToolsTheme}>
    <Header height="xsmall">
      <Box justify="start" direction="row" gap="small">
        <Box margin={{ left: 'medium' }} align="center">
          <GrommetIcon size="customSmall" color="brand" />
        </Box>
        <Anchor margin="xsmall" href="#" label="Grommet Tools" />
      </Box>
      <Box background="lightGrey" direction="row" justify="center" round>
        <TextInput plain a11yTitle="search bar" placeholder="Search Tools" />
        <Button>
          <Search />
        </Button>
      </Box>
      <Box
        margin={{ right: 'large' }}
        justify="end"
        direction="row"
        gap="medium"
      >
        <Anchor href="#" label="Grommet" />
        <Anchor href="#" label="Feedback" />
      </Box>
    </Header>

    <Box fill="horizontal" background="gradient">
      {/* <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="medium"
        > */}

      {/* <Box 
          margin={{
            left: 'xlarge',
            right: 'xlarge',
          }} */}
      {/* > */}
      <Heading
        margin={{
          top: 'marginXL',
          left: 'xlarge',
          right: 'xlarge',
          bottom: 'none',
        }}
        size="customLarge"
      >
        Feedback
      </Heading>

      <Box
        margin={{
          left: 'xlarge',
          // right: 'xlarge',
        }}
        // fill='horizontal'
        // direction='row'
        // justify='between'
      >
        <Grid
          alignContent="center"
          // columns='500px'
          columns={{ count: 'fit', size: '500px' }}
          rows="auto"
          // columns={{
          //   small: ["auto"],
          //   medium: ["auto", "auto"],
          //   large: ["auto", "auto"],
          //   xlarge: ["auto", "auto"]
          // }}
          // rows={{
          //   small: ["auto", "auto"],
          //   medium: ["auto"],
          //   large: ["auto"],
          //   xlarge: ["auto"]
          // }}
          gap="large"
          // margin='large'
        >
          <Box
          // margin={{
          // left: 'xlarge',
          // right: 'xlarge',
          // }}
          // width='430px'
          >
            <Anchor
              size="xlarge"
              href="#"
              icon={<Github />}
              label="Share feedback on Github"
            />

            <Paragraph size="large">
              Submit feedback on Grommet Tools on Github. Here, you can help
              improve the tools and connect with other Grommet Tools lovers.
            </Paragraph>

            <Box width="430px">
              <Grid
                columns="small"
                // width='small'
                // gap="medium"
                gap={{ row: 'medium', column: 'xsmall' }}
                rows="auto"
                // margin={{ horizontal: 'small', vertical: 'small' }}
              >
                {/* <Box 
                background='pink'
                width='medium' 
                margin={{
                  left: 'xlarge',
                  right: 'xlarge',
                }}
                > */}
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <ClearOption color="DesignerYellow" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <CloudUpload color="PublisherPink" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Configure color="ThemerOrange" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Camera color="ImagerOrange" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <BarChart color="TabularGreen" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                <Card width="small" background="white">
                  <CardHeader alignSelf="center">
                    <Selection color="SlidesBlue" size="large" />
                  </CardHeader>
                  <CardBody alignSelf="center">
                    <Paragraph textAlign="center">Designer / Github</Paragraph>
                  </CardBody>
                </Card>
                {/* </Box> */}
              </Grid>
            </Box>
          </Box>

          <Box
          // width='430px'
          >
            <Anchor
              size="xlarge"
              href="#"
              icon={<Slack />}
              label="Join Grommet's Slack Channel"
            />
            <Paragraph size="large">
              Contribute to the discussion about Grommet and Grommet Tools and
              see what others are up to by joining the Slack channel.
            </Paragraph>

            <Card width="small" background="white">
              <CardHeader alignSelf="center">
                <ClearOption color="DesignerYellow" size="large" />
              </CardHeader>
              <CardBody alignSelf="center">
                <Paragraph textAlign="center">Designer / Github</Paragraph>
              </CardBody>
            </Card>

            {/* <Box 
                height='500px'
                //background='green'
                // oerflow='auto'
                // direction='row-responsive'
                // alignSelf='end' 
                // width='large'
                // flex={true}
                // justify=
                > */}
            <Box width="xlarge">
              <Image
                width="xlarge"
                fill="horizontal"
                alignSelf="end"
                fit="fill"
                src="GremlinFaceMask.svg"
              />
            </Box>
            {/* </Box> */}
          </Box>
        </Grid>

        {/* <Image 
                  width='700px'
                  // fill= "horizontal"
                  alignSelf='end'
                  // fit='contain'
                  src="GremlinFaceMask.svg"
                  /> */}
      </Box>
      {/* </Box> */}

      {/* <Box background='pink' width='xlarge'> */}

      {/* </Box> */}

      {/* </Responsive> */}
    </Box>
  </Grommet>
);

export default Feedback;
