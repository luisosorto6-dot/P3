const { chromium } = require("playwright");

/*
==================================================
CRAWLER UNIVERSAL
==================================================

MODOS:

1. MANUAL
- usa selector enviado

2. AUTO
- detecta automáticamente:
  - títulos
  - párrafos
  - links
  - imágenes
  - tablas

==================================================
*/

async function checkPage(url, selector = null) {

  /*
  ==============================================
  ABRIR NAVEGADOR
  ==============================================
  */

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  /*
  ==============================================
  ENTRAR PAGINA
  ==============================================
  */

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 30000
  });

  /*
  ==============================================
  DESCARGAR HTML
  ==============================================
  */

  const html = await page.content();

  /*
  ==============================================
  MODO MANUAL
  ==============================================

  SI EXISTE selector:
  usa extracción específica
  */

  let content = null;

  if (selector) {

    content = await page.$eval(
      selector,
      el => el.innerText.trim()
    );

  }

  /*
  ==============================================
  MODO AUTOMATICO
  ==============================================
  */

  const titles = await page.$$eval(
    "h1, h2",
    els => els.map(el => el.innerText.trim())
  );

  /*
  ==============================================
  EXTRAER PARRAFOS
  ==============================================
  */

  const paragraphs = await page.$$eval(
    "p",
    els => els
      .map(el => el.innerText.trim())
      .filter(text => text.length > 20)
  );

  /*
  ==============================================
  EXTRAER LINKS
  ==============================================
  */

  const links = await page.$$eval(
    "a",
    els => els.map(el => ({

      text: el.innerText.trim(),

      href: el.href

    }))
  );

  /*
  ==============================================
  EXTRAER IMAGENES
  ==============================================
  */

  const images = await page.$$eval(
    "img",
    els => els.map(el => el.src)
  );

  /*
  ==============================================
  EXTRAER TABLAS
  ==============================================
  */

  const tables = await page.$$eval(
    "table",
    els => els.map(el => el.innerText.trim())
  );

  /*
  ==============================================
  METADATA
  ==============================================
  */

  let pageTitle = await page.title();

  /*
  ==============================================
  META DESCRIPTION
  ==============================================
  */

  let metaDescription = "";

  try {

    metaDescription = await page.$eval(
      'meta[name="description"]',
      el => el.content
    );

  } catch (error) {

    metaDescription = "NO DESCRIPTION";

  }

  /*
  ==============================================
  CERRAR NAVEGADOR
  ==============================================
  */

  await browser.close();

  /*
  ==============================================
  RETORNAR RESULTADO
  ==============================================
  */

  return {

    url,

    selector,

    html,

    content,

    pageTitle,

    metaDescription,

    titles,

    paragraphs,

    links,

    images,

    tables,

    checkedAt: new Date()

  };

}

/*
==================================================
EXPORTAR FUNCION
==================================================
*/

module.exports = { checkPage };