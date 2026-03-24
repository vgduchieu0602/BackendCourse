import {Router} from "express";

const subscriptionRoutes = Router()

subscriptionRoutes.get('/', (req, res) => {
    res.send({title: "Get all subscriptions"})
})

subscriptionRoutes.get('/:id', (req, res) => {
    res.send({title: "Get subscription details"})
})

subscriptionRoutes.post('/', (req, res) => {
    res.send({title: "Create Subscription"})
})

subscriptionRoutes.put('/:id', (req, res) => {
    res.send({title: "Update Subscription"})
})

subscriptionRoutes.delete('/:id', (req, res) => {
    res.send({title: "Delete Subscription"})
})

subscriptionRoutes.get('/user/:id', (req, res) => {
    res.send({title: "Get all user subscriptions"})
})

subscriptionRoutes.put('/:id/cancel', (req, res) => {
    res.send({title: "Cancel Subscription"})
})

subscriptionRoutes.get('/upcoming-renewals', (req, res) => {
    res.send({title: "Get upcoming renewals"})
})

export default subscriptionRoutes;