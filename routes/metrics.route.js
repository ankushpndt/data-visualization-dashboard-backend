const express = require("express");
const router = express.Router();
const MetricModel = require("../models/metrics.model.js")
const {getMetricsData,readSingleMetricData } = require("../controller/metrics.controller.js")
router.route("/get").get(getMetricsData)
router.route("/get/:metricId").get(readSingleMetricData )
module.exports = router;