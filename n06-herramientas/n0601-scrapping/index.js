const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador.');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    const titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('Cerramos navegador...');
    browser.close();
    console.log('Navegador cerrado...');
})();

// const puppeteer = require('puppeteer');
const link = 'https://platzi.com/blog/que-es-platzi-master/';

(async function browser() {
    console.log('Abrimos chromium');
    const browser = await puppeteer.launch({ headless: false }); //lanzamos el navegador

    const page = await browser.newPage();
    await page.goto(link);

    const commentsText = await page.evaluate(() => {
        const comments = document.querySelectorAll('.CommentContent-text p');
        const listOfComments = [];
        comments.forEach((comment) => {
            listOfComments.push(comment.innerHTML);
        });
        return listOfComments;
    });

    browser.close();

    console.log(commentsText);
})();
