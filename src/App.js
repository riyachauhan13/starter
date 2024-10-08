import React from 'react'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import CartContainer from './components/CartContainer'

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <div>
      <Navbar/>
      <CartContainer/>
    </div>
  )
}

export default App
