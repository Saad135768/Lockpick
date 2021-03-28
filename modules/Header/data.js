import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
query {
  getProducts{
    items{
      _id
    }
  }
}
`