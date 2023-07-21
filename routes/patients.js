const express = require('express');
const router = express.Router();
const patient = require('../controllers/patientController')
const passport = require('passport');


router.post('/register',passport.authenticate('jwt',{session:false}),patient.register)
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patient.createReport)
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patient.patientReports)

module.exports = router;