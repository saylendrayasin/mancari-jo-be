import express, { Router } from 'express';
import { ModuleJob } from '../model/job.js';

const RouterJob = express.Router();

RouterJob.get('/', async (req, res) => {
  try {
    const jobs = await ModuleJob.getJob();

    return res.status(200).json({
      status: true,
      message: 'Sukses mendapatkan data job',
      data: jobs,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

RouterJob.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const job = await ModuleJob.getJobById(id);

    if (!job) {
      return res.status(404).json({
        status: false,
        message: 'Data job tidak ditemukan',
      });
    }

    return res.status(200).json({
      status: true,
      message: 'Sukses mendapatkan data job',
      data: job,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

RouterJob.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newJob = await ModuleJob.addJob(data);

    return res.status(201).json({
      status: true,
      message: 'Sukses menambahkan job',
      data: newJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

RouterJob.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedJob = await ModuleJob.updateJob(id, data);

    if (!updatedJob) {
      return res.status(404).json({
        status: false,
        message: 'Data job tidak ditemukan',
      });
    }

    return res.status(200).json({
      status: true,
      message: 'Sukses mengupdate data job',
      data: updatedJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

RouterJob.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await ModuleJob.deleteJob(id);

    return res.status(200).json({
      status: true,
      message: 'Sukses menghapus data job',
      data: deletedJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

export default RouterJob;
