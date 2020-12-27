import express from 'express';
import Doc from './models/Doc';

const router = express.Router();

router.get('/doc/list/:id', async (req, res) => {
  const id = req.params.id;

  const doc = await Doc.findById(id);

  if (!doc) {
    return res.status(404).json({
      message: 'Doc does not exists',
    });
  }

  return res.status(200).json(doc);
});

router.post('/doc/create', async (req, res) => {
  const doc = await Doc.create(req.body);

  return res.status(200).json(doc);
});

router.delete('/doc/delete/:id', async (req, res) => {
  const id = req.params.id;

  const response = await Doc.deleteOne({ _id: id });

  if (response.deletedCount === 0) {
    return res.status(404).json({
      message: 'Doc does not exists.',
    });
  }

  return res.status(200).json();
});

router.put('/doc/update/:id', async (req, res) => {
  const id = req.params.id;

  const response = await Doc.updateOne({ _id: id }, req.body);

  if (response.n === 0) {
    return res.status(404).json({
      message: 'Doc does not exists.',
    });
  }

  return res.status(200).json();
});

export default router;
