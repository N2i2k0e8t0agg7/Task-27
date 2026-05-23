import React, { useState } from 'react'
import Shoe from '../assets/shoe.png'

const Cart = () => {

    const [cart, setCart] = useState([])

    const products = [
        { id: 1, name: "White Casual Sneaker", price: 70, image: Shoe },
        { id: 2, name: "Black Running Shoe", price: 80, image: Shoe },
        { id: 3, name: "Street Style Sneaker", price: 90, image: Shoe },
        { id: 4, name: "Classic Sneaker", price: 100, image: Shoe },
        { id: 5, name: "White Casual Sneaker", price: 110, image: Shoe },
        { id: 6, name: "Black Running Shoe", price: 120, image: Shoe },
    ]

    const addToCart = (product) => {
        const existingItem = cart.find(
            item => item.id === product.id
        )
        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setCart(updatedCart)
        } else {
            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ])
        }
    }
    
    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
        setCart(updatedCart)
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cart
            .map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0)
        setCart(updatedCart)
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,0
    )

    return (
        <>
            <div className='w-[30%] bg-stone-400 fixed top-30 right-8 p-5 rounded-2xl'>
                <h2 className='text-3xl font-bold mb-5 text-center'>
                    Cart
                </h2>
                {cart.length === 0? (<p className='text-center text-xl'>Empty Cart</p>): 
                    (cart.map(item => (
                        <div key={item.id} className='flex items-center justify-between bg-stone-300 p-4 rounded-xl mb-4'>
                            <div className='flex items-center gap-4'>
                                <img src={item.image} alt="img" className='w-16 h-16 rounded-xl bg-white p-1'/>
                                <div>
                                    <h3 className='font-bold text-lg'>{item.name}</h3>
                                    <p className='mt-2'>${item.price}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button className='bg-stone-400 px-3 py-1 rounded-md text-white cursor-pointer' onClick={() => decreaseQuantity(item.id)}>
                                    -
                                </button>
                                <span className='font-bold'>{item.quantity}</span>
                                <button className='bg-stone-400 px-3 py-1 rounded-md text-white cursor-pointer' onClick={() => increaseQuantity(item.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                    )))}
                <h2 className='text-3xl font-bold text-center mt-6'>
                    Total: ${total.toFixed(2)}
                </h2>
            </div>
            
            <div className='w-3/5 grid grid-cols-2 gap-5 p-10'>
                {products.map(product => (
                    <div key={product.id} className='mt-15 hover:scale-105 duration-75'>
                        <img src={product.image} alt="img" className='bg-yellow-50 shadow rounded-2xl w-full'/>
                        <div className='bg-stone-500 rounded-2xl p-4'>
                            <h3 className='font-bold text-xl'>{product.name}</h3>
                            <div className='flex flex-col items-center'>
                                <p className='mt-4 text-lg'>${product.price}</p>
                                <button className='border-2 border-black mt-4 p-3 rounded-2xl mb-2 cursor-pointer hover:bg-stone-600 transition-all' onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart