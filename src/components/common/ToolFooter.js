import React from 'react';
import { Box, Button, Heading, Paragraph, Footer } from 'grommet';

const ToolFooter = ({
  backgroundColor,
  headingText,
  description,
  buttonLabel,
}) => (
  <Footer direction="column" gap="none">
    <Box background={backgroundColor} pad="large" fill="horizontal">
      <Box
        margin={{ top: 'large', bottom: 'medium' }}
        alignSelf="center"
        width="DesignerStart"
      >
        <Heading size="small" margin="xsmall" alignSelf="center">
          {headingText}
        </Heading>
        <Paragraph
          textAlign="center"
          size="large"
          margin="small"
          alignSelf="center"
        >
          {description}
        </Paragraph>
      </Box>
      <Button
        margin={{ bottom: 'small' }}
        primary
        alignSelf="center"
        href="https://designer.grommet.io/"
        color="white"
        label={buttonLabel}
      />
    </Box>
    <Box pad="xsmall" background="gradient" fill="horizontal" />
  </Footer>
);

export default ToolFooter;
