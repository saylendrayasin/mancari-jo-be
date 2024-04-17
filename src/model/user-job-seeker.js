import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userJobSeekerSchema = new mongoose.Schema({
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
  fotoProfil: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: 'jobSeeker',
  },
  tempatLahir: {
    type: String,
    required: true,
  },
  tanggalLahir: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  pendidikanTerakhir: {
    type: String,
    required: true,
    enum: ['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
  },
  preferensiPekerjaan: {
    type: [String],
    required: false,
  },
  lamaran: {
    type: [String],
    required: false,
  },
  pengalamanKerja: [
    {
      type: Schema.Types.Mixed,
    },
  ],
});

const ModelUserJobSeeker = mongoose.model('userJobSeeker', userJobSeekerSchema);

export default ModelUserJobSeeker;

//---------------Module User----------------

async function getUserByUsername(username) {
  return await ModelUserJobSeeker.findOne({ namaPengguna: username });
}

async function getUSerById(id) {
  return await ModelUserJobSeeker.findById(id);
}

async function addUser(data) {
  return await ModelUserJobSeeker.create(data);
}

async function updateUser(id, data) {
  if (data.namaPengguna) {
    const existingUser = await getUserByUsername(data.namaPengguna);
    if (existingUser && existingUser._id.toString() !== id) {
      throw new Error('Nama pengguna sudah terdaftar');
    }
  }

  return await ModelUserJobSeeker.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await ModelUserJobSeeker.findByIdAndDelete(id);
}

export const ModuleUserJobSeeker = {
  getUserByUsername,
  getUSerById,
  addUser,
  updateUser,
  deleteUser,
};
