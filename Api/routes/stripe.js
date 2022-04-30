const router = require("express").Router();

// const KEY = process.env.REACT_APP_STRIPE_SK
const stripe = require("stripe")("sk_test_51Kfyf7SAalZUTFTVLw4BZ1f5r2XYHd2RjQvWYMJ5W8S7ugbprJEq7xkkCIc06dbv5eWrBBLS4fC9ieCjHY83YNZb00nUrOHa2b");

router.post("/payment", (req, res) => {
    stripe.paymentIntents.create(
        {
            amount: req.body.amount,
            currency: "usd",
            automatic_payment_methods: {enabled: true}
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;