import React from 'react'
import { useSelector } from 'react-redux'

function Total() {
  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      totalQuantity += Math.floor(item.quantity)
      totalPrice += Math.floor(item.price * item.quantity)
    })
    return { totalPrice, totalQuantity }
  }
  return (
    <div>
      <p>
        Total: ({getTotal().totalQuantity} units) : &nbsp;{' '}
        <strong>${getTotal().totalPrice} </strong>
      </p>
    </div>
  )
}

export default Total
