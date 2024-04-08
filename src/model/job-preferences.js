import mongoose, { Schema, SchemaType } from 'mongoose';

const jobPreferenceSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
});

const ModelJobPreference = mongoose.model('jobPreference', jobPreferenceSchema);

export default ModelJobPreference;

//---------------Module Job Preference----------------

async function getJobPreference() {
  return await ModelJobPreference.find();
}

async function getJobPreferenceById(id) {
  return await ModelJobPreference.findById(id);
}

async function addJobPreference(nama) {
  const cekData = await ModelJobPreference.findOne({ nama: nama });
  if (cekData) {
    throw new Error('Data sudah ada');
  }
  return await ModelJobPreference.create({
    nama: nama,
  });
}

async function updateJobPreference(id, nama) {
  return await ModelJobPreference.findByIdAndUpdate(
    id,
    {
      nama: nama,
    },
    { new: true }
  );
}

async function deleteJobPreference(id) {
  return await ModelJobPreference.findByIdAndDelete(id);
}

export const ModuleJobPreference = {
  getJobPreference,
  getJobPreferenceById,
  addJobPreference,
  updateJobPreference,
  deleteJobPreference,
};
