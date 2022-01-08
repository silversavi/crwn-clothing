import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HJghNKQhi0B1oyKloTGad8HoatmbjViIzKA27U4vpRh8K1BCpKIX7be4uxLObgnC7mla8eK7FcOk7mDLn2A5s1o00Bb4q75oO'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label = 'Pay now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount = { priceForStripe }
            stripeKey = { publishableKey }
            panelLabel="Pay Now"
            token = {onToken}

       />
    )
}

export default StripeCheckoutButton