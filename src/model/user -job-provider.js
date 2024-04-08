import mongoose from 'mongoose';

const userJobProviderSchema = new mongoose.Schema({
  namaPengguna: {
    type: String,
    required: true,
    unique: true,
  },
  kataSandi: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'jobProvider',
  },
  pekerjaan: {
    type: [String],
    required: false,
  },
});

const ModelUserJobProvider = mongoose.model(
  'userJobProvider',
  userJobProviderSchema
);

export default ModelUserJobProvider;

//---------------Module User----------------

async function getUserByUsername(username) {
  return await ModelUserJobProvider.findOne({ namaPengguna: username });
}

async function getUSerById(id) {
  return await ModelUserJobProvider.findById(id);
}

async function addUser(data) {
  return await ModelUserJobProvider.create(data);
}

async function updateUser(id, data) {
  return await ModelUserJobProvider.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await ModelUserJobProvider.findByIdAndDelete(id);
}

export const ModuleUserJobProvider = {
  getUserByUsername,
  getUSerById,
  addUser,
  updateUser,
  deleteUser,
};
