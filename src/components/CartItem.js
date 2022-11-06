import React from 'react'
import styles from './cartitem.module.css'
import {
  incrementQuantity,
  decrementQuantity,
  removeQuantity,
} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function CartItem({ id, price, image, title, quantity = 0 }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      const { price, quantity } = item
      totalQuantity += Math.floor(quantity)
      totalPrice += Math.floor(price * quantity)
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <div className={styles.product_container}>
      <img src={image} alt='Cart Product' />
      <div className={styles.title}>
        <p> {title} </p>
        <p>
          <strong> ${Math.floor(`${price}`)} </strong>
        </p>
      </div>
      <div className={styles.button_container}>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        <p> {quantity} </p>
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        <p>${Math.floor(`${price * quantity}`)} </p>
      </div>
      <button
        className={styles.btn}
        onClick={() => dispatch(removeQuantity(id))}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
