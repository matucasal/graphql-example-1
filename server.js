const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = buildSchema(`
type Query {
	products: [Product]
	orders: [Order]
}

type Product {
	id: ID!
	description: String!
	reviews: [Review]
	price: Float!
}

type Review {
	rating: Int!
	comment: String
}

type Order {
	date: String!
	subtotal: Float!
	items: [OrderItem]
}

type OrderItem {
	product: Product!
	quantity: Int!
}
`);

const root = {
  products: [
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
  ],

  orders: [
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
  ],
};
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(3000, () => {
  console.log("running grahpql server on port 3000");
});
