import mongoose from 'mongoose'
import FeatureCollectionSchema from '../schemas/FeatureCollection'

interface IFeature {
    _id: mongoose.Types.ObjectId,
    type: string,
    geometry: {
        type: string,
        coordinates: number[]
    },
    properties: mongoose.Schema.Types.Mixed
}

interface IFeatureCollection extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    name: string,
    type: string,
    features: IFeature[]
}

const FeatureCollection = mongoose.model<IFeatureCollection>('features', FeatureCollectionSchema)

export default FeatureCollection