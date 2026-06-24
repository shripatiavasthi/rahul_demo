import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/GlobalStyles.jsx'
import { appTheme } from './theme/theme.js'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={appTheme}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
