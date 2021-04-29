import gql from 'graphql-tag'

export const CHECK_CART_STOCK = gql`
  query checkCartStock {
    checkCartStock {
      _id
      product {
        _id
        name {
          en
        }
        images
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
      serialNumber
    }
  }
`

export const CREATE_ORDER = gql`
  mutation addOrder(
    $shipping: OrderAddressInput
    $billing: OrderAddressInput
    $paymentMethod: String
    $shippingMethod: String
    $shippingCost: Float
    $promoCode: String
  ) {
    addOrder(
      shipping: $shipping
      billing: $billing
      paymentMethod: $paymentMethod
      shippingMethod: $shippingMethod
      shippingCost: $shippingCost
      promoCode: $promoCode
    ) {
      _id
      orderId
      status
      variations {
        variation {
          _id
          product {
            _id
            name {
              en
            }
            productCode
          }
          price {
            mainPrice
            discountedPrice
          }
          serialNumber
        }
        quantity
        price
      }
      shipping {
        apartment
        email
        floor
        street
        building
        phone
        postalCode
        city
        country
        state
      }
      billing {
        apartment
        email
        floor
        street
        building
        phone
        postalCode
        city
        country
        state
      }

      totals {
        total
        subtotal
        shipping
        discount {
          amount
          discountType
        }
      }
      notOriginal {
        isOriginal
        original
      }
    }
  }
`

export const GET_ORDER = gql`
  query getOrder($_id: ID!) {
    getOrder(_id: $_id) {
      _id
      orderId
      status
    }
  }
`
export const GET_PROMOCODES = gql`
query getPromoCodes($code: String) {
  getPromoCodes(code: $code) {
    items {
      name
      code
      value
      active
      valueType
    }
  }
}
`