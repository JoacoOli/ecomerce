const products = [
    {
        id: '1',
        name: '',
        price: '',
        category: '',
        img: '',
        stock: '',
        description: '',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}