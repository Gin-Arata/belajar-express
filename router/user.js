import express from 'express';

const router = express.Router();

let dataUser = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

router.route('/users')
    .get((req, res) => {
        res.json(dataUser);
        // const selectedData = dataUser.find(user => user.id === parseInt(req.params.userId));

        // if (!selectedData) {
        //     res.status(404).send('404 - Data not found');
        // } else {
        //     res.json(selectedData);
        // }
    })

    .post((req, res) => {
        const userInput = dataUser.push(req.body)

        if (userInput) {
            res.status(200).send('Data successfully added to the object');
        } else {
            res.status(500).send('Data failed to add to the object');
        }
    })


router.route('/users/:userId')
    .put((req, res) => {
        res.send('PUT User ' + req.params.userId);
    })

    .delete((req, res) => {
        res.send('Delete User ' + req.params.userId);
    });


export default router;