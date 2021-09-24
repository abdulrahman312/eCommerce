export const addItemToCart = (cartItems, newItem) => {
    const cartItemExists = cartItems.find(item => item.id === newItem.id);

    if (cartItemExists) {
        return cartItems.map(item =>
            item.id === newItem.id ?
                { ...item, quantity: item.quantity + 1 } :
                item
        )
    }

    return [...cartItems, { ...newItem, quantity: 1 }]
}

export const deleteItemFromCart = (cartItems, itemToDelete) => {
    return cartItems.filter(cartItem => itemToDelete.id !== cartItem.id)
}

export const removeCartItem = (cartItems, itemToRemove) => {
    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
    )
}