const MetricModel = require("../models/metrics.model.js")
const fs = require('fs');
const getMetricsData = async (req, res) => {
  try {
    const allData = await MetricModel.find({})
    res.status(200).json({ success: true, message: "Data fetched successfully", allData })
  }
  catch (error) {
    res.status(400).json({ success: false, message: "Couldn't fetch data", errMessage: error.message })
  }
}

const readSingleMetricData = async (req, res) => {
  const  {metricId}  = req.params
  try {
    fs.readFile(`./assignment_data/${metricId}.json`, 'utf8', (err, data) => {
      if (err) {
        res.status(400).json({ success: false, message: "Check error message", errMessage: err.message })
        return
      }
      const singleMetricData = JSON.parse(data)
      res.status(200).json({success:true, message:"Time metrics data fetched successfully", singleMetricData})
    });
  }
  catch (error) {
    res.status(400).json({ success: false, message: "Couldn't fetch data", errMessage: error.message })
  }
}

module.exports = { getMetricsData, readSingleMetricData }