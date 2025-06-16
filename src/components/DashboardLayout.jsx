import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme } from '@mui/material/styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Asosiy menyu',
  },
  {
    segment: 'dashboard',
    title: 'Boshqaruv paneli',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Buyurtmalar',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'reports',
    title: 'Hisobotlar',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sotuvlar',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Trafik',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integratsiyalar',
    icon: <LayersIcon />,
  },
]

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
})

function PageContent({ pathname }) {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h4">{pathname} sahifasi</Typography>
    </Box>
  )
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default function MainDashboardLayout() {
  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme}>
      <DashboardLayout>
        <PageContent pathname="Boshqaruv paneli" />
      </DashboardLayout>
    </AppProvider>
  )
}