/**
 * Program to start express server for dev testing.
 */
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./build/webpack.config.development')

const app = express()
const compiler = webpack(config)
const port = process.env.port || 3000

/**
 * Webpack dev and hot middleware are used during development for serving js files and hot reload
 */
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './tests/index.html'))
});

app.get('/tree',(req,res)=>{
    res.json(
        {
            "id": 1,
            "label": "A",
            "child": [
                {
                    "id":2,
                    "label": "B"
                },
                {
                    "id":3,
                    "label": "E",
                    "child": [
                        {
                            "id":4,
                            "label": "F",
                            "child": [
                                {
                                    "id":5,
                                    "label": "G"
                                }
                            ]
                        },
                        {
                            "id":6,
                            "label": "H",
                            "child": [
                                {
                                    "id":7,
                                    "label": "I",
                                    "child": [
                                        {
                                            "id":8,
                                            "label": "J"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
});

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err)
        return
    }
})