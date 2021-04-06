/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag'

export const SINGLE_PRODUCT_QUERY = gql`
query getProductWithVariations($_id: ID!) {
  getProductWithVariations(_id: $_id) {
    key: _id
    product {
      _id
      name {
        en
        ar
      }
      images
      productCode
      description {
        en
      }
      customAttributes {
        key
        value
      }
      mainAttributes {
        name {
          en
        }
      }
      taxonomies {
        _id
        name {
          en
        }
      }
      active
      vendor {
        _id
        name {
          en
          ar
        }
      }
    }
    variations {
      key: _id
      _id
      product {
        name {
          en
        }
        productCode
      }
      images
      stock {
        branch {
          name {
            en
            ar
          }
        }
        amount
      }
      price {
        mainPrice
        discountedPrice
      }
      mainAttributes {
        _id
        name {
          en
        }
        value
        mainAttributeType {
          name {
            en
          }
        }
      }
    }
  }
}
`