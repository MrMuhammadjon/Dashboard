import { CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <DashboardLayout />
    </CssVarsProvider>
  )
}

export default App