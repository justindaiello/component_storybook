import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyle.styled';

/**
 * Wrap storybook with StyledComponents config
 */
addDecorator((storyFn: Function): StoryFnReactReturnType => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
});

export const parameters: object = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
