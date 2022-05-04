const mongoose = require("mongoose")

const metricsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  measure: {
    type: String,
    required: true
  },
  dimensions: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
})

const metricModel = mongoose.model("metric", metricsSchema)

module.exports = metricModel