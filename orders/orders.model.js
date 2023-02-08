const orders = [
	{
		data: "2019-01-01",
		subtotal: 69.98,
		items: [
			{
				product: {
					id: "redshoe",
					description: "Old Red Shoe",
					price: 29.99,
				},
				quantity: 2,
			},
		],
	},
];

function getAllOrders() {
	return orders;
}


module.exports = {
	getAllOrders,
};