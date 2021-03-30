/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query getProducts(
    $taxonomies: [ID]
    $searchTerm: String
    $sort: ProductSort
    $vendor: ID
    $name: String
    $page: Int
    $pageSize: Int
    $tags: [String]
    $mainAttributes: [ID]
    $priceRange: PriceRange
  ) {
    getProducts(
      taxonomies: $taxonomies
      sort: $sort
      vendor: $vendor
      searchTerm: $searchTerm
      name: $name
      page: $page
      pageSize: $pageSize
      tags: $tags
      mainAttributes: $mainAttributes
      priceRange: $priceRange
    ) {
      totalCount
      items {
      _id
      variations{
        
        product{
          _id
          name{
            en
          }
          description{
            en
          }
          outOfStock
          images
        }
        price{
          mainPrice
          discountedPrice
        }
        stock{
          amount
        }
      }
    }
    }
  }
`