import React from 'react';
import { Box, Button, Heading, Paragraph, Footer } from 'grommet';

const ToolFooter = ({
  backgroundColor,
  headingText,
  description,
  buttonLabel,
  buttonHref,
  ...rest
}) => (
  <Footer gap="none" {...rest}>
    <Box background={backgroundColor} pad="large" fill="horizontal">
      <Box
        margin={{ top: 'large', bottom: 'medium' }}
        alignSelf="center"
        width="DesignerStart"
      >
        <Heading
          textAlign="center"
          size="small"
          margin="xsmall"
          alignSelf="center"
        >
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
        color="white"
        label={buttonLabel}
        href={buttonHref}
        target="_blank"
        rel="noreferrer"
      />
    </Box>
    <Box pad="xsmall" background="gradient" fill="horizontal" />
  </Footer>
);

export { ToolFooter };
