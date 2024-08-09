import express from 'express';

const router = express.Router();

router.route('/users/:userId')
    .get((req, res) => {
        const dataUser = [
            {
                id: 1,
                name: 'John Doe',
            },
            {
                id: 2,
                name: 'Jane Doe',
            },
        ];

        const selectedData = dataUser.find(user => user.id === parseInt(req.params.userId));

        if (!selectedData) {
            res.status(404).send('404 - Data not found');
        } else {
            res.json(selectedData);
        }
    })

    .post((req, res) => {
        res.send('POST User ' + req.params.userId);
    })

    .put((req, res) => {
        res.send('PUT User ' + req.params.userId);
    })

    .delete((req, res) => {
        res.send('Delete User ' + req.params.userId);
    });

    
export default router;