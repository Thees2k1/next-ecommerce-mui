'use client'

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';
// import CartItem from './CartItem'; // Replace with your CartItem component

const pages = ['Home', 'Products', 'About'];

function Appbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo here */}
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
              Your Logo
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                component="button"
                sx={{ my: 2, color: 'white', display: 'block' }}
                key={page}
                underline="none"
                href={`/${page.toLowerCase()}`} // Assuming your links point to lower case routes
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleOpenModal} color="inherit">
              <ShoppingCartIcon />
            </IconButton>
         
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ bgcolor: 'background.paper', width: 400, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Cart
          </Typography>
          {/* Here you can map through your cart items and display them using the CartItem component */}
          <Typography variant="h6">
           Item 1
          </Typography>
          <Typography variant="h6">
           Item 2
          </Typography>
         {/* Add more CartItem components as needed */}
        </Box>
      </Modal>
    </div>
  );
}

export default Appbar;