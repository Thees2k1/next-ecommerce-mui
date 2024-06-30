'use client'

import React from 'react'

import { useAppSelector, useAppDispatch } from '../lib/hook'

import { decrement, increment } from '../lib/store/slices/counter-slice'
import { Box, Button, Container, Typography } from '@mui/material'

export  default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Container>
      <Typography variant='h2' sx={{color:'#00a400'}}>{count}</Typography>
      <Box>
        <Button variant='contained' onClick={()=>dispatch(increment())}>Increment</Button>
        <Button variant='contained' onClick={()=>dispatch(decrement())}>Decrement</Button>
      </Box>
    </Container>
  )
}