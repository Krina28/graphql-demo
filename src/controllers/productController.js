const products = [{
    id: 1,
    name: 'Cold Coffee',
    category: 'Beverage',
    warehouse: 'Ahmedabad'
}, {
    id: 2,
    name: 'burger',
    category: 'Food',
    warehouse: 'Banglore'
},
{
    id: 3,
    name: 'Pasta',
    category: 'Food',
    warehouse: 'Banglore'
}]

let productCtrl = {
    getAllProductList() {
        return products;
    }
}

module.exports = productCtrl;
