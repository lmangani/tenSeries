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
-------------

### Status
Nothing to see here yet.

#### Credits
Contains JS elements from [predictatron](https://github.com/limscoder/predictatron)
