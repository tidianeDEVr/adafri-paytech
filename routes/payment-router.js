const express = require('express')
const router = express.Router()
const axios = require('axios')
const config = require('../config')
const service = require('./../services/payment-service')
const accounts = config.db.collection('accounts')

router.get('/success', async(req, res) => {
    const id_client = req.SES21qHsQEqZXMxQ9zgHy
    const payment_amount = req.U2FsdGVkX18ZUVvShF
    const snapshot = await accounts.get()
    await snapshot.docs.map((doc) => { if(id_client === doc.data().id) {
        return res.send(doc.data()) 
    }})
    return res.status(400).send('Client introuvable')
})

router.post("/request-payment", async(req, res) => {
    const hideLibelleIdClient = 'SES21qHsQEqZXMxQ9zgHy'
    const hidePaymentAmount = 'U2FsdGVkX18ZUVvShF'
    if (!service.checkIsAllParamsExist(req.body)) {
        return res.status(401).send('Missing data')
    }
    var data = JSON.stringify({
        "item_name": "Recharge de compte",
        "item_price": req.query.amount,
        "currency": req.query.currency,
        "ref_command": service.generateReference(),
        "command_name": "Recharge de compte",
        "env": "test",
        "ipn_url": "https://localhost:4200/overview",
        "success_url": `http://localhost:3000/api/payments/success?${hideLibelleIdClient}=${req.query.client}&${hidePaymentAmount}=${req.query.amount}`
    });
      
    var axiosConfig = {
    method: 'post',
    url: 'https://paytech.sn/api/payment/request-payment',
    headers: { 
            Accept: "application/json",
            'Content-Type': "application/json",
            API_KEY: config.PAYTECH_CREDENTIALS.API_KEY,
            API_SECRET: config.PAYTECH_CREDENTIALS.SECRET_KEY,
        },
        data : data
    };
    
    axios(axiosConfig)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data))
    }).catch(function (error) {
        console.log(error);
        res.status(500).send(error)
    });
})

module.exports = router