const fs = require("fs");

const { checkPage } = require("../crawler/crawler");

const STORAGE = "./storage/storage.json";

/*
=========================================
MONITOR AUTOMATICO
=========================================
*/

function startMonitor() {

  setInterval(async () => {

    console.log("");
    console.log("=================================");
    console.log("REVISANDO PAGINAS");
    console.log("HORA:", new Date().toLocaleTimeString());
    console.log("=================================");

    let data = JSON.parse(fs.readFileSync(STORAGE));

    for (const item of data) {

      console.log("");
      console.log("---------------------------------");

      console.log("REVISANDO:", item.url);

      const result = await checkPage(item.url, item.selector);

      console.log("CONTENIDO:");
      console.log(result.content);

      console.log("");
console.log("=================================");
console.log("DATOS EXTRAIDOS");
console.log("=================================");

console.log("");

console.log("URL:");
console.log(result.url);

console.log("");

console.log("PAGE TITLE:");
console.log(result.pageTitle);

console.log("");

console.log("META DESCRIPTION:");
console.log(result.metaDescription);

console.log("");

console.log("CONTENT:");
console.log(result.content);

console.log("");

console.log("TITLES:");
console.log(result.titles);

console.log("");

console.log("PARAGRAPHS:");
console.log(result.paragraphs);

console.log("");

console.log("LINKS:");
console.log(result.links.slice(0, 5));

console.log("");

console.log("IMAGES:");
console.log(result.images.slice(0, 5));

console.log("");

console.log("TABLES:");
console.log(result.tables);
      /*
      =====================================
      SI HAY CAMBIOS
      =====================================
      */

      if (item.content !== result.content) {

        console.log("");
        console.log("CAMBIO DETECTADO");

        console.log("ANTES:");
        console.log(item.content);

        console.log("");

        console.log("AHORA:");
        console.log(result.content);

        item.content = result.content;

        item.checkedAt = result.checkedAt;

      } else {

        console.log("SIN CAMBIOS");

      }

    }





    fs.writeFileSync(STORAGE, JSON.stringify(data, null, 2));

  }, 15000);

}

module.exports = {
  startMonitor
};