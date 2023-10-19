import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import features from './routes/Features'
import thumbnails from './routes/Thumbnails'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/WildXpedition')

app.use(cors())
app.use(bodyParser.json())
app.use('/', features)
app.use('/images', express.static('images'))
app.use('/thumbnails', thumbnails)

app.listen(3001, () => {
    console.log('Server listening on port 3001')
})