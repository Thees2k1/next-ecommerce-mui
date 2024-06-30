import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface CartItemProps{
    key: React.Key;
    itemTitle: string;
    onDelete: ()=>void;

}
const CartListItem = (props: CartItemProps) => {
   
  return (
    <ListItem
      key={props.key}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment" onClick={props.onDelete}>
          <DeleteOutline />
        </IconButton>
      }
    >
      <ListItemText primary={props.itemTitle} />
    </ListItem>
  );
};

export default CartListItem;
