import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from './store/api-context';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import MainTheme from './themes/MainTheme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApiProvider>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </StrictMode>
);

reportWebVitals();
