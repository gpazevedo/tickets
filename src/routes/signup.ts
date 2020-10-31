import express from 'express'

const router = express.Router()
router.get('/api/users/signup', (req, res) => {
    res.send('signUp !')
});

export {router as signupRouter}
