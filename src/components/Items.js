import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './items.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import Loading from './Loading'

function Items() {
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`https://fakestoreapi.com/products/?limit=10`)
      setItems(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
      setErrorMessage('Unable to fetch data from API')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        items?.map((item) => {
          const { id, title, image, price } = item
          return (
            <div key={id} className={styles.products}>
              <img className={styles.img} src={image} alt='FakeAPI Images' />
              <p>{title} </p>
              <h3>${price} </h3>
              <button
                onClick={() => dispatch(addToCart({ id, image, title, price }))}
              >
                Add to cart
              </button>
            </div>
          )
        })
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default Items
