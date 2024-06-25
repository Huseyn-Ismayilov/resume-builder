// utils/pdfGenerator.ts

import fs from 'fs';
import path from 'path';
import pdf from 'html-pdf';

const generatePDF = (htmlContent: string, fileName: string) => {
  const outputPath = path.join(process.cwd(), 'public', `${fileName}.pdf`);

  return new Promise((resolve, reject) => {
    pdf.create(htmlContent).toFile(outputPath, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export default generatePDF;
