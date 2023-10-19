import express from 'express'
import sharp from 'sharp'

const thumbnails = express.Router()

thumbnails.get('/:name', (req, res) => {
    const { name } = req.params
    const { width, height } = req.query
    const path = `./images/${name}`
    const widthInt = parseInt(width as string)
    const heightInt = parseInt(height as string)
    if (widthInt && heightInt) {
        sharp(path)
            .resize(widthInt, heightInt)
            .toBuffer()
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'image/png' })
                res.end(data)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    } else {
        res.status(400).send('Invalid width and height')
    }
})

export default thumbnails