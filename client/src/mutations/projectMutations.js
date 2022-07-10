import { gql } from '@apollo/client'

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      name
      description
      status
      client {
        id
        name
        phone
        email
      }
    }
  }
`

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      name
      description
      status
      client {
        id
        name
        phone
        email
      }
    }
  }
`

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT }

//$status: ProjectStatus!

// status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatus',
//             values: {
//               new: { value: 'Not started' },
//               progress: { value: 'In progress' },
//               completed: { value: 'Completed' },
//             },
//           }),
//           defaultValue: 'Not started',
//         },
