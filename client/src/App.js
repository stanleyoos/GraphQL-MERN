import Header from './components/Header'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients'
import AddClientModal from './components/AddClientModal'
import Projects from './components/Projects'

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         clients: {
//           merge(existing, incoming) {
//             return incoming
//           },
//         },
//         projects: {
//           merge(existing, incoming) {
//             return incoming
//           },
//         },
//       },
//     },
//   },
// })

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />

        <div className="container">
          <Projects />
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
