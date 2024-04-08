import mongoose, { Schema, SchemaType } from 'mongoose';

const jobSchema = new mongoose.Schema({
  penerbit: {
    type: String,
    required: true,
  },
  tanggalTerbit: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  pelamar: {
    type: Schema.Types.Mixed,
  },
  preferensi: {
    type: [String],
    required: false,
  },
  syarat: {
    type: String,
    required: false,
  },
  lokasi: {
    type: Schema.Types.Mixed,
  },
  adaPelamarBaru: {
    type: Boolean,
    required: true,
    default: false,
  },
  diterima: {
    type: Schema.Types.Mixed,
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  gaji: {
    type: Number,
    required: true,
  },
  jamKerja: {
    type: Schema.Types.Mixed,
  },
});

const ModelJob = mongoose.model('job', jobSchema);

export default ModelJob;

//---------------Module Job----------------

async function getJob() {
  return await ModelJob.find();
}

async function getJobById(id) {
  return await ModelJob.findById(id);
}

async function addJob(data) {
  return await ModelJob.create(data);
}

async function updateJob(id, data) {
  return await ModelJob.findByIdAndUpdate(id, data, { new: true });
}

async function deleteJob(id) {
  return await ModelJob.findByIdAndDelete(id);
}

export const ModuleJob = {
  getJob,
  getJobById,
  addJob,
  updateJob,
  deleteJob,
};
