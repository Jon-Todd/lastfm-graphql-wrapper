// Import libraries
const { makeExecutableSchema } = require("graphql-tools");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware

// Make executable schema
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize Express middlewares
const app = require("express")();

app.use(bodyParser.json());

// Enable CORS with specific options
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

// GraphQL endpoint
app.use("/graphql", graphqlExpress({ schema }));

// GraphiQL endpoint
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start app
app.listen(8080, () => {
    console.log("Listening on 8080");
});
