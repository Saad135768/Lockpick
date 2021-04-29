import gql from 'graphql-tag'

export const REGISTER_MUTATION = gql`
  mutation Register(
    $username: String!
    $password: String!
    $email: String
    $name: String
    $phone: String!
    $verificationStrategy: String
    $address: [CustomerAddressInput]
    $sendPin: Boolean
   
  ) {
    addCustomerAccount(
      username: $username
      password: $password
      email: $email
      name: $name
      phone: $phone
      sendPin: $sendPin
      address: $address
      verificationStrategy: $verificationStrategy
    
    ) {
      customer {
        name
        phone
      }
      token
      pinId
    }
  }
`
export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!, $accountType: String!) {
    login(username: $username, password: $password, accountType: $accountType)
  }
`
export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($username: String!, $verificationStrategy: String) {
    forgotPassword(username: $username, verificationStrategy: $verificationStrategy)
  }
`
export const VERIFY_PIN = gql`
  mutation verifyPin($pin: String!, $username: String!, $verificationStrategy: String) {
    verifyPin(pin: $pin, username: $username, verificationStrategy: $verificationStrategy)
  }
`
export const RESET_PASSWORD = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token)
  }
`
export const CHANGE_PASSWORD = gql`
mutation changePassword($password: String! $newPassword: String!){
  changePassword(password: $password newPassword: $newPassword)
}
`

export const GET_CURRENT_CUSTOMER = gql`
  query getCurrentCustomer {
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
    }
  }
`


export const GET_ORDER = gql`
 query getOrder($_id: ID!) {
   getOrder(_id:$_id) {
    status
    customerName
    shippingMethod
    paymentMethod
    shippingDate
    orderId
    onlineOrderPaymentId
    variations{
      quantity
      total
      images
      variation{
        
        product{
          _id
          productCode
          images
          name{
            en
          }
          
        }
      }
    }
    totals{
      shipping
    }
       shipping{
      state
      street
      city
      country
      postalCode
      state
    }
       billing{
      state
      street
      city
      country
      postalCode
      state
    }
  }
 }

`

export const GET_ORDERS = gql`
query getOrders($status: String) {
  getOrders(status: $status){
    items{
      checkoutId
      _id
      orderId
      status
      variations{
      quantity
      }
      shippingDate
      totals{
        total
      }
      
    }
  }
}
`