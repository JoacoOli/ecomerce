const products = [
    {
        id: '1',
        name: 'Air Jordan 1 Retro',
        price: '250',
        category: 'nike',
        img: 'https://th.bing.com/th/id/OIP.YdPRYTHLB6QtlWQokbLiQgHaFS?rs=1&pid=ImgDetMain',
        stock: '13',
        description: 'jordan',
    },
    {id: '2', name: 'samsung s21', price: 800, category: 'celular', img: 'https://th.bing.com/th/id/OIP.YdPRYTHLB6QtlWQokbLiQgHaFS?rs=1&pid=ImgDetMain'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}