// components/ExportPDFButton.js
import React from 'react';
import { usePDFContext } from '@/app/context/PdfContext';

const ExportPDFButton = () => {
  const { exportToPDF } = usePDFContext();

  const handleExportToPDF = () => {
    exportToPDF('pdf-content'); // 'pdf-content' burada belirli bir ID olarak kullanılacak
  };

  return (
    <button onClick={handleExportToPDF}>PDF Olarak Kaydet</button>
  );
};

export default ExportPDFButton;
