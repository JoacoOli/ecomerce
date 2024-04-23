const products = [
    {
        id: '1',
        name: 'Air Jordan 1 Retro',
        price: '250',
        category: 'zapatilla',
        img: 'https://th.bing.com/th/id/OIP.YdPRYTHLB6QtlWQokbLiQgHaFS?rs=1&pid=ImgDetMain',
        stock: '13',
        description: 'jordan',
    },
    {id: '2', name: 'Jordan 1 Retro Black White', price: 230, category: 'zapatilla', img: 'https://i.pinimg.com/originals/ac/61/39/ac61396e197d3c3e8949346f597f5138.jpg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}