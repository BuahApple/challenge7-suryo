const express = require("express");
const router = express.Router()
const auth = require('../controllers/authController');
const game = require('../controllers/gameController');
const passport = require('../lib/passport');
const restrict = require('../middlewares/restrict');
const {user_game, user_game_biodata} = require('../models/');

router.get('/', (req, res) => {res.render('../views/game')})
router.get('/login', (req, res) => {res.render('login')})
router.get('/register', (req, res) => {res.render('register')})
router.get('/suit', (req, res) => {res.render('suit')})
router.get('/whoami', restrict, auth.whoami);


router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/createroom', restrict, game.createRoom)

module.exports = router