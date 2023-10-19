import express from 'express'
import { getFeature, postFeature } from '../controllers/Feature'

const features = express.Router()

features.get('/features/:name', getFeature)

features.post('/features/:name', postFeature)

export default features