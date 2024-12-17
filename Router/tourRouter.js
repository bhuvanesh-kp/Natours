const express = require('express');
const tourController = require('./../Controllers/tourController');
const router = express.Router();


router.route('/').get(tourController.getAllTours).post(tourController.postTours);
router.route('/:id').patch(tourController.tourValid , tourController.updateTour).delete(tourController.deleteTour);


module.exports = router;