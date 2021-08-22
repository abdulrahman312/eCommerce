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