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

export const CMS = gql`
query {
  cms {
    slider{
      name
      imageURL
      url
    }
    secondarySlider {
      name
      imageURL
      url
    }
  }
}
`