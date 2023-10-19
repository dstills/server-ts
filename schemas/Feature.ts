import mongoose from 'mongoose'

const FeatureSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Feature'],
    required: true
  },
  properties: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    default: {
      name: String,
      latitude: Number,
      longitude: Number
    }
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point', 'LineString', 'Polygon'],
      required: true
    }
  }
}, {
  versionKey: false,
  _id: false
})

export default FeatureSchema