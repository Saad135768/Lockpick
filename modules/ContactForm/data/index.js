import gql from 'graphql-tag'

export const ADD_CONTACT_FORM = gql`
mutation addContactForm($name: String! $email: String! $message: String!){
    addContactForm(name: $name, email: $email, message: $message){
        _id
    }
}
`