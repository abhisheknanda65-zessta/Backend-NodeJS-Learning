const express = require('express');
const pdfService = require('../service/pdf-service');

const router = express.Router();
router.get('/invoice', (req, res, next) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=invioce.pdf;'
    })
pdfService.buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
);
});

module.exports = router;