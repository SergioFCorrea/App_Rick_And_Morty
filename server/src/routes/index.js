const getCharById = require('../controllers/getCharById')
const handleFavorite = require('../controllers/handleFavorites')
const login = require('../controllers/login')
// const express = require('express')
const { pop } = require('../utils/users')
const router = require('express').Router()


router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/fav', handleFavorite.postFav)

router.delete('/fav/:id', handleFavorite.deleteFav)

module.exports = router;