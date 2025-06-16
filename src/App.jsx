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
import OrdersPage from './components/OrdersPage' // Yangi komponentni import qilish

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

export default function MainDashboardLayout() {
  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme}>
      <DashboardLayout>
        
        <OrdersPage pathname="Buyurtmalar" />
      </DashboardLayout>
    </AppProvider>
  )
}



