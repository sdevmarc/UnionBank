const express = require('express')
const router = express.Router()

const AccountController = require('../controllers/Account.controller')
const AccountMiddleware = require('../middleware/Account.middleware')

router.post('/createaccount',
    AccountMiddleware.CheckDeveloperTokenValid,
    AccountMiddleware.CreateAccountCheckEmptyFields,
    AccountMiddleware.CreateAccountCheckAccountIfExists,
    AccountController.CreateAccount
)

router.get('/accounts',
    AccountMiddleware.CheckDeveloperTokenValid,
    AccountController.GetAllAccount
)

router.get('/accounts/:userId',
    AccountMiddleware.CheckDeveloperTokenValid,
    AccountController.SearchAccount
)

router.post('/updateaccount/:accountId',
    AccountMiddleware.CheckDeveloperTokenValid,
    AccountMiddleware.UpdateAccountCheckEmptyFields,
    AccountController.UpdateAccount
)

router.post('/updateactiveaccount/:accountId',
    AccountMiddleware.CheckDeveloperTokenValid,
    AccountController.UpdateActiveAccount
)

module.exports = router