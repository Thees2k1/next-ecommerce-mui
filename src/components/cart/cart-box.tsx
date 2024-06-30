"use client";

import {
  Badge,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Popper,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import CartListItem from "./cart-item";
import {removeFromCart} from '@/lib/store/slices/cart-slice'

interface CartBoxProps {
  sx?: SxProps<Theme>;
}

const CartBox = ({ sx }: CartBoxProps) => {
  const items = useAppSelector((state) => state.cart.cartItem);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const handleGotoCart = () => {
    setOpen(false);
    router.replace(paths.cart);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Box sx={sx}>
      <IconButton onClick={handleClick} color="inherit">
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        sx={{ mt: "45px" }}
        keepMounted
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Stack
              sx={{
                border: 1,
                borderColor: "black",
                color: "black",
                background: "white",
                display: "flex",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              {items.map((prod) => (
                <CartListItem key={prod.id} itemTitle={prod.title} onDelete={()=>dispatch(removeFromCart(prod.id))}/>
              ))}
              <Divider />
              <Button variant="contained" onClick={handleGotoCart}>
                Go to cart
              </Button>
            </Stack>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default CartBox;
