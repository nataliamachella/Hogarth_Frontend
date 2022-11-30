import { Box,useColorModeValue, } from '@chakra-ui/react'
import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import ContentAdmin from './ContentAdmin.jsx'

const AdminPage = () => {
  return (
    <Box display="flex" flexDir="row">
      <SidebarAdmin />
      <ContentAdmin />
    </Box>
  )
}

export default AdminPage