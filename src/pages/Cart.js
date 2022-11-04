import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import Total from '../components/Total'
import Navbar from '../components/Navbar'

function Cart() {
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <Navbar />
      <h3 style={{ padding: '30px 128px' }}>Shopping Cart</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 128px',
          gap: '20px',
        }}
      >
        <div style={{ width: '70%' }}>
          {cart?.map((item) => {
            const { id, image, title, price, quantity } = item
            return (
              <CartItem
                key={id}
                id={id}
                image={image}
                title={title}
                price={price}
                quantity={quantity}
              />
            )
          })}
        </div>
        <div style={{ marginLeft: '30px' }}>
          <Total />
        </div>
      </div>
    </>
  )
}

export default Cart
