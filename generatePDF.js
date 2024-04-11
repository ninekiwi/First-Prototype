const puppeteer = require('puppeteer');

async function saveAsPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent('<!DOCTYPE html>' + document.documentElement.outerHTML);

    // Modify PDF options as needed
    const pdfOptions = {
        path: 'Construction_Inspection_and_Survey_Form.pdf',
        format: 'A4',
        margin: {
            top: '20px',
            right: '20px',
            bottom: '20px',
            left: '20px'
        }
    };

    await page.pdf(pdfOptions);

    await browser.close();
}

saveAsPDF();
