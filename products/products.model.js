const products = [
	{
		id: "redshoe",
		description: "Red Shoe",
		price: 29.99,
		reviews: [],
	},
	{
		id: "bluejean",
		description: "Blue Jean",
		price: 39.99,
		reviews: [],
	},
];

function getAllProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	return products.filter((product) => product.price >= min && product.price <= max);
}

function getProductById(id) {
	return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
	console.log('test git');
	const newProduct = {
		id,
		description,
		price,
		reviews: [],
	};
	products.push(newProduct);
	return newProduct;
}

function addNewProductReview(id, rating, comment) {
	const product = getProductById(id);
	if (product) {
		const review = {
			rating,
			comment,
		};
		product.reviews.push(review);
		return review;
	}
	return null;
}

module.exports = {
	getAllProducts,
	getProductsByPrice,
	getProductById,
	addNewProduct,
	addNewProductReview,
};