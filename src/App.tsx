import  AppHeader  from './components/Header/Header';
import React from 'react';
import './App.css';
import PanelComponent from './components/Panel/Panel';
import NavTabs from './components/TabPanel/tabpanel';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#fff'
    },
    primary: {
      main: 'rgb(226, 100, 90)',
    }
  },
  typography: {
    "fontFamily": `"Lato", sans-serif`,}
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <AppHeader />
      <main>
        <div className="container">
        <NavTabs />
        </div>
      </main>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
