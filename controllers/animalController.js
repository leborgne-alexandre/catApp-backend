const Animal = require("../models/animalModel")



exports.getAnimal = async (req, res) => {

    try {

        const animal = await Animal.findById(req.params.id);

        res.status(200).json({

            status: 'success ✅',
            data: {
                animal
            }
        })

    } catch (error) {

        res.status(404).json({
            status: 'fail',
            message: error
        });

    }

}

exports.getAnimals = async (req, res) => {

    try {

        const animals = await Animal.find()

        res.status(200).json({

            status: 'success ✅',
            data: {
                animals
            }
        })

    } catch (error) {

        res.status(404).json({
            status: 'fail',
            message: error
        });

    }

}

exports.createAnimal = async (req, res) => {

    try {
        const newAnimal = await Animal.create(req.body);
        res.status(201).json({
            status: 'success ✅',
            data: {
                animal: newAnimal
            }
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })

    }

}

exports.updateAnimal = async (req, res) => {

    try {

        const animal = await Animal.findById(req.params.id, req.body, {

            new: true,
            runValidators: true

        });

        res.satus(200).json({

            status: 'success ✅',
            data: {

                animal

            }


        })



    } catch (error) {

        res.status(404).json({

            status: 'fail',
            message: error

        })


    }



}