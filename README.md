<img src="https://github.com/tensorflow.png?size=50"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Prometheus_software_logo.svg/173px-Prometheus_software_logo.svg.png" width=50>

# tenSeries
Tensorflow LSTM predictions against Prometheus metrics

### Installation
```
npm install
```
#### Example
In our default example metrics are exposed on endpoint `/metrics` and port `3000` using the Prometheus server in ENV `PROM`
```
PROM=prometheus.server:9090 npm run server
```

#### Test
```
npm test
```

### TODO
* model training API
* additional data query backends
* save/restore functions
-------------

### Status
Nothing to see here yet.

#### Credits
Contains JS elements from [predictatron](https://github.com/limscoder/predictatron)
