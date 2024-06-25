'use client';
import React from 'react';
import { Button } from '@nextui-org/button';

interface Props {
  className?: string;
}

const PdfExportButton: React.FC<Props> = ({ className }) => {
  const handleExportPDF = async () => {
    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'export.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download PDF:', error);
      alert('Failed to download PDF. Please try again later.');
    }
  };

  return (
    <div>
      <Button
        onClick={handleExportPDF}
        color="primary"
        variant="shadow"
        className={`font-medium rounded-md text-white ${className}`}
      >
        Download as PDF
      </Button>
    </div>
  );
};

export default PdfExportButton;
