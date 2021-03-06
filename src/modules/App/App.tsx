import { ThemeProvider } from 'styled-components';

import './App.css';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle.styled';
import fontawesomeConfig from '../../utils/fontawesomeConfig';

/**
 * initialize font awesome library
 */
fontawesomeConfig.init();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <p>
            Run &apos;yarn storybook&apos; to view the component storybook
        </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
