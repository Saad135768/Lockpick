import gql from 'graphql-tag'

export const GET_CART = gql`
  query getCart {
    getCurrentCustomer {
      _id
      email
      name
      phone
      address {
        city
        country
        postalCode
        street
        state
        address1
      }
      cart {
        variations {
          variation {
            stock {
              branch {
                name {
                  en
                  ar
                }
              }
              amount
            }
            _id
            product {
              name {
                en
              }
              images
              _id
              productCode
            }
            mainAttributes {
              name {
                en
              }
              mainAttributeType {
                name {
                  en
                  ar
                }
              }
            }
            price {
              mainPrice
              discountedPrice
            }
          }
          quantity
        }
      }

      wishlist {
        name

        products {
          product {
            images
            _id
            name {
              en
              ar
            }
            productCode

            mainAttributes {
              name {
                en
              }
              mainAttributeType {
                name {
                  en
                  ar
                }
              }
            }
          }
        }
      }
    }
  }
`
export const UPDATE_CART_ITEM = gql`
mutation updateCartItem($variation: CartVariationInput!) {
  updateCartItem(variation: $variation) {
    variations {
      variation {
        stock {
          branch {
            name {
              en
              ar
            }
          }
          amount
        }
        _id
        product {
          name {
            en
          }
          images
          _id
          productCode
        }
        mainAttributes {
          name {
            en
          }
          mainAttributeType {
            name {
              en
              ar
            }
          }
        }
        price {
          mainPrice
          discountedPrice
        }
      }
      quantity
    }
  }
}
`


export const EDIT_CUSTOMER = gql`
  mutation editCustomer(
    $email: String
    $name: String
    $phone: String
    $address: [CustomerAddressInput]
    $customAttributes: [CustomAttributeInput]
  ) {
    editCustomer(
      email: $email
      name: $name
      phone: $phone
      address: $address
      customAttributes: $customAttributes
    ) {
      email
      name
      phone
      address {
        city
        street
        country
        postalCode
        state
        postalCode
      }
    }
  }
`