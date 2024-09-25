const mongoose = require("mongoose");

const bloodPressureSchema = new mongoose.Schema({
  systolic: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
  diastolic: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
});

const heartRateSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  levels: { type: String, required: true },
});

const respiratoryRateSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  levels: { type: String, required: true },
});

const temperatureSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  levels: { type: String, required: true },
});

const diagnosisHistorySchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: Number, required: true },
  blood_pressure: { type: bloodPressureSchema, required: true },
  heart_rate: { type: heartRateSchema, required: true },
  respiratory_rate: { type: respiratoryRateSchema, required: true },
  temperature: { type: temperatureSchema, required: true },
});

const diagnosticListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  profile_picture: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  phone_number: { type: String, required: true },
  emergency_contact: { type: String, required: true },
  insurance_type: { type: String, required: true },
  diagnosis_history: { type: [diagnosisHistorySchema], required: true },
  diagnostic_list: { type: [diagnosticListSchema], required: true },
  lab_results: { type: [String], required: true },
});

// Create the model
const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
