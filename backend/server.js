import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Stripe Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { vehicleName, price } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "lkr",
            product_data: { name: vehicleName },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payment-success`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Payment error" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
