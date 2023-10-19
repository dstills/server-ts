import mongoose from 'mongoose'
import FeatureSchema from './Feature'

const FeatureCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  type: {
    type: String,
    enum: ['FeatureCollection'],
    required: true
  },
  crs: {
    type: {
      type: String,
      enum: ['name'],
      required: true
    },
    properties: {
      name: {
        type: String
      }
    }
  },
  features: [FeatureSchema]
}, { versionKey: false })

export default FeatureCollectionSchema