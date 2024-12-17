const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'Sucess',
        result: tours.length,
        data: {
            tours: tours
        }
    });
}

exports.tourValid = (req, res, next) =>{
    console.log(req.params);
    if (!req.body.name){
        return res.status(400).json({
            status : 'fail',
            data : '<... name not added ...>'
        })
    }
    next();
}

exports.updateTour = (req, res) => {
    //console.log(req.params);
    const id = req.params.id;

    res.status(201).json({
        message: 'Success',
        data: {
            tours: "<Tours is updated here>"
        }
    });
}

exports.deleteTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id;

    res.status(224).json({
        message: 'Success',
        data: {
            tours: null
        }
    });
}

exports.postTours = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newtour = Object.assign({ id: newId }, req.body);

    tours.push(newtour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'Success',
            data: {
                tours: newtour
            }
        })
    });
}