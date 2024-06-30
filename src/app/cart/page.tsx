'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { addToCart } from '@/lib/store/slices/cart-slice'
import CartItemModel from '@/types/cart-item-model'
import { Button, Divider, Stack, Typography } from '@mui/material'
import React, { useCallback } from 'react'



const Cart = () => {
  const items = useAppSelector((state)=> state.cart.cartItem)
  const dispatch = useAppDispatch()

  useCallback(()=>handleFakeAdd,[])
  const handleFakeAdd=()=>{
    const fakedata : CartItemModel[] =  [
      {id: 1,title:'Nike air force 1',price: 2000000, quantity:1,},
      {id: 2,title:'Some perfume',price: 3000000, quantity:3,},
      {id: 3,title:'Nike jordan 1',price: 5000000, quantity:1,},
  ]
    fakedata.map((e)=>{
      dispatch(addToCart(e));
    })
  }
  return (
    <Stack sx={{mt:'50px'}}>
        <Typography sx={{color:"black"}}> Cart Home</Typography>
        <Button variant='text' onClick={handleFakeAdd}>add fake cart item</Button>
        <Divider/>
        {items.map((item)=><Typography variant='h3' sx={{color: 'black'}}>{item.title} </Typography>)}
    </Stack>
  )
}

export default Cart