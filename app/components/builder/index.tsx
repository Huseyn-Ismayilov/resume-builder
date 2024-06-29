'use client'
// import Editor from './editor'
// import Resume from './resume'
import Navbar from './navbar'
// import { PDFProvider } from '@/app/context/PdfContext'

// const BuilderLayout = () => {
//   return (
//     <div className=''>
//       <Navbar />
//       <div className='flex h-dvh overflow-hidden pt-16'>
//         <Editor />
//         <Resume />
//       </div>
//     </div>
//   )
// }

// export default BuilderLayout


// components/ResumeContent.js
import React from 'react';
import { usePDFContext } from '@/app/context/PdfContext';
import ExportPDFButton from '../PDFexport/button';

const ResumeContent = () => {

  return (
    <div id='pdf-content'>
       <Navbar />
      <h1>Özgeçmiş</h1>
      <p>Ad: John Doe</p>
      <p>Yaş: 30</p>
      <p>Meslek: Yazılım Geliştirici</p>
      <p>Eğitim: Bilgisayar Mühendisliği</p>
      <p>Tecrübe: 5 yıl</p>
    </div>
  );
};

export default ResumeContent;
