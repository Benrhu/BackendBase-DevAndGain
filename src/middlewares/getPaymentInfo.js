const stripe = require("stripe")("sk_test_1234567890");

async function getPaymentInfo(paymentIntentId) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    console.log(paymentIntent);
  } catch (error) {
    console.error(error);
  }
}

getPaymentInfo("pi_1234567890");
