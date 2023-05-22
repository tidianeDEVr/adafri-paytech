const express = require('express');
const app = express();
const cors = require('cors');
const paymentRouter = require("./routes/payment-router");

// EXPRESS CONFIG
app.use(express.json());
app.use(cors());
app.use('/api/payments', paymentRouter);

// LISTENER
app.listen(3000);