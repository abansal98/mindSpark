const express = require('express'),
    router = express.Router()
    
router.get('/', (req, res, next)=>{
    res.redirect('/about');
})

router.get('*', (req, res, next)=>{
    res.redirect('/about');
})

module.exports = router