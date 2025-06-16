import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function OrdersPage({ pathname }) {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h4">{pathname} sahifasi</Typography>
      <Typography variant="body1">
        Bu yerda buyurtmalar ro'yxati va boshqaruv elementlari bo'lishi mumkin
      </Typography>
    </Box>
  )
}

OrdersPage.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default OrdersPage