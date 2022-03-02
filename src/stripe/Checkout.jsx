import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51JuQFPGEYuNiTW2IsyROKa1VERMAklrdDwJ28a3HcdgZhsT1XHnQn8vr61P9mGnQeEkKAKp21qyEpowt8cVaqvcT00Hjl1Avdv"
    );
  }

  return stripePromise;
};
export const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const item = {
    price: "price_1KYgYjGEYuNiTW2Icrf3TpZI",
    quantity: 1,
  };
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setIsLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    if (error) setStripeError(error.message);
    setIsLoading(false);
  };

  if (stripeError) alert(stripeError);
  return (
    <div>
      <button onClick={redirectToCheckout} disabled={isLoading}>{isLoading ? "Loading..." : "Buy"}</button>
    </div>
  );
};
