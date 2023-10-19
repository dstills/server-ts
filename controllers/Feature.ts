import { Request, Response, NextFunction } from 'express'
import FeatureCollection from '../models/FeatureCollection'

const getFeature = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('GET /features/:' + req.params.name)
        let { name } = req.params
        const featureCollection = await FeatureCollection.findOne({ name })
        if (!featureCollection) {
            res.status(404).send('Feature Collection not found!')
            return next()
        }
        // Special sauce
        if (Object.keys(req.query).length > 0) {
            featureCollection.features = featureCollection.features.filter(feature => Object.keys(req.query).every(key => feature.properties[key as keyof typeof feature.properties] === req.query[key]))
        }
        res.json(featureCollection)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
}

const postFeature = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('POST /features/:' + req.params.name)
        let { name } = req.params
        const featureCollection = await FeatureCollection.findOne({ name })
        if (!featureCollection) {
            const featureCollection = new FeatureCollection({ name, features: [] })
            return next()
        }
        const feature = req.body
        console.log(feature)
        featureCollection.features.push(feature)
        try {
            await featureCollection.save()
        } catch (err) {
            console.log(err)
        }
        res.json(featureCollection)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
}

export {
    getFeature,
    postFeature
}