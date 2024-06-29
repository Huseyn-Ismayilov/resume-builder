'use client'
// contexts/PDFContext.js
import React, { createContext, useContext } from 'react';
import html2pdf from 'html2pdf.js';

// PDFContext oluşturma
const PDFContext = createContext();

// PDFContext Provider bileşeni
export const PDFProvider = ({ children }) => {
  const exportToPDF = (contentId) => {
    const element = document.getElementById(contentId);

    if (!element) {
      console.error(`Element with id "${contentId}" not found.`);
      return;
    }

    const options = {
      margin:       1,
      filename:     'resume.pdf',
      image:        { type: 'pdf', quality: 1 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <PDFContext.Provider value={{ exportToPDF }}>
      {children}
    </PDFContext.Provider>
  );
};

// Özel hook oluşturma
export const usePDFContext = () => useContext(PDFContext);
