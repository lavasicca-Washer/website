import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { items, customerEmail } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: customerEmail,
            line_items: items.map(item => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.qty,
            })),
            success_url: `https://www.lalaverielens.fr/shop.html?success=true&order_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `https://www.lalaverielens.fr/shop.html?canceled=true`,
        });

        return res.status(200).json({ url: session.url });

    } catch (error) {
        console.error('Stripe error:', error);
        return res.status(500).json({ error: 'Stripe session creation failed' });
    }
}