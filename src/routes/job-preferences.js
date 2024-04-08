import express from 'express';
import { ModuleJobPreference } from '../model/job-preferences.js';

const RouterJobPreferences = express.Router();

RouterJobPreferences.get('/', async (req, res) => {
  try {
    const jobPreferences = await ModuleJobPreference.getJobPreference();

    res.status(200).json({
      status: true,
      message: 'Sukses mendapatkan data job preference',
      data: jobPreferences,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

RouterJobPreferences.post('/', async (req, res) => {
  try {
    const { nama } = req.body;

    const newJobPreference = await ModuleJobPreference.addJobPreference(nama);

    res.status(201).json({
      status: true,
      message: 'Sukses menambahkan job preference',
      data: newJobPreference,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

export default RouterJobPreferences;
