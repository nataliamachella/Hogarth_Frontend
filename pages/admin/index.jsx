import { Box,useColorModeValue, } from '@chakra-ui/react'
import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import Notas from './Notas.jsx'

const AdminPage = () => {
  return (
    <Box display="flex" flexDir="row">
      <SidebarAdmin />
      <Notas />
    </Box>
  )
}

export default AdminPage