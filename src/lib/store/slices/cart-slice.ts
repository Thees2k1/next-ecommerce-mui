import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store' 
import CartItemModel from '@/types/cart-item-model'

interface CartState {
    cartItem: CartItemModel[],
}

const initState: CartState={
    cartItem: [
    ]

} satisfies CartState as CartState

export const cartSlice = createSlice({
    name:'cart',
    initialState:initState,
    reducers:{
        addToCart:(state ,action: PayloadAction<CartItemModel>)=>{
           state.cartItem = [...state.cartItem, action.payload];
        },
        removeFromCart:(state ,action: PayloadAction<number>)=>{
           state.cartItem =state.cartItem.filter((item)=> item.id !== action.payload)
         }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCartItems = (state: RootState)=> state.cart.cartItem

export default cartSlice.reducer
