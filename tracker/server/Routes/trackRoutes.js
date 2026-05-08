const express = require("express");

const fs = require("fs");

const { checkPage } = require("../crawler/crawler");

const router = express.Router();

const STORAGE = "./storage/storage.json";

/*
=========================================
AGREGAR URL A MONITOREAR
=========================================
*/

router.post("/track", async (req, res) => {

  const { url, selector } = req.body;

  const result = await checkPage(url, selector);

  let data = JSON.parse(fs.readFileSync(STORAGE));

  const existing = data.find(item => item.url === url);

  /*
  =========================================
  SI NO EXISTE
  =========================================
  */

  if (!existing) {

    data.push(result);

    fs.writeFileSync(STORAGE, JSON.stringify(data, null, 2));

    return res.json({
      message: "URL guardada",
      result
    });

  }

  /*
  =========================================
  SI CAMBIO
  =========================================
  */

  if (existing.content !== result.content) {

    existing.content = result.content;

    existing.checkedAt = result.checkedAt;

    fs.writeFileSync(STORAGE, JSON.stringify(data, null, 2));

    return res.json({
      message: "Cambio detectado",
      result
    });

  }

  /*
  =========================================
  SIN CAMBIOS
  =========================================
  */

  return res.json({
    message: "Sin cambios",
    result
  });

});

module.exports = router;