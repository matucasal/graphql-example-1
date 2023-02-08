const products = [
	{
		id: "redshoe",
		description: "Red Shoe",
		price: 29.99,
	},
	{
		id: "bluejean",
		description: "Blue Jean",
		price: 39.99,
	},
];

function getAllProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	return products.filter((product) => product.price >= min && product.price <= max);
}

module.exports = {
	getAllProducts,
	getProductsByPrice,
};