
const stripe = require('stripe')('sk_test_51NFVMtSBa1DPoKnkcMqBNlLduWL2yMAx8qLAZJ3sDJ09ETEjTWZSxdAuuWU21xrWnY0sOmrsOfKUSE2sdJIQc45x00OqhmAwsl');
const express = require('express');
const app = express();
require('dotenv').config();
const router = express.Router();
router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '2',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/Dashboard`,
      cancel_url:  `${process.env.CLIENT_URL}/payment`,
    });
  
    res.redirect(303, session.url);
  });
  