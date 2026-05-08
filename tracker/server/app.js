const express = require("express");

const trackRoutes = require("./routes/trackRoutes");

const { startMonitor } = require("./services/monitorService");

const app = express();

app.use(express.json());

app.use("/", trackRoutes);

app.listen(3000, () => {

  console.log("=================================");
  console.log("SERVER RUNNING ON PORT 3000");
  console.log("=================================");

});

/*
=========================================
INICIA MONITOR AUTOMATICO 
=========================================
*/

startMonitor();