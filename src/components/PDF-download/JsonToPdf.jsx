import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import image from '../../img/logo_infogen.png';

const  JSONToPDF = () => {

  const generatePDF = () => {
    const pdf = new jsPDF();
    var img = new Image();
    img.src = image;
    pdf.addImage(img, 'JPEG', 0, 0, 50, 50);
    // const jsonData = {
    //   name: 'John Doe',
    //   age: 30,
    //   occupation: 'Web Developer',
    //   location: 'Cityville',
    // };

    let content = '';
    // for (const key in jsonData) {
    //   if (jsonData.hasOwnProperty(key)) {
    //     content = `
    //     Organization Details
    //     Organization Name,Tejas
    //     Office Name,All
    //     Location Name,All
    //     Device Name,All
    //     User Name,All
    //     Scenario Name,All
              
    //     Over-all Report
    //     Total Usage Count,11
    //     Completion Rate,9.090909090909092%
    //     Average Usage in min,0.82min
              
    //     Task details
    //     Sr No,Day, Start Time,Usage Time(in min),Module,Scenario,Completion
    //     1,2023-08-18, 19:38:53,0.38min,CPR,CPR_BasicLifeSupport,true
    //     2,2023-08-18, 19:40:01,0.35min,CPR,CPR_BLS_Garden_AED,false
    //     3,2023-08-18, 19:04:22,4.58min,CPR,CPR_BLS_Garden,false
    //     4,2023-08-18, 19:42:15,0.50min,CPR,CPR_BLS_Garden_AED,false
    //     5,2023-08-18, 19:42:51,0.60min,CPR,CPR_BLS_Garden_AED,false
    //     6,2023-08-18, 19:56:20,0.40min,CPR,CPR_BLS_AED,false
    //     7,2023-08-18, 20:08:21,0.30min,CPR,CPR_BLS_Garden_AED,false
    //     8,2023-08-18, 20:08:45,0.37min,CPR,CPR_BLS_Garden_AED,false
    //     9,2023-08-18, 19:58:15,0.37min,CPR,CPR_BasicLifeSupport,false
    //     10,2023-08-18, 20:11:34,0.73min,CPR,CPR_BLS_Garden,false
    //     11,2023-08-18, 20:13:14,0.43min,CPR,CPR_BasicLifeSupport,false
    //     `;
    //   }
    // }

    const jsonData = [
      { name: 'John Doe', age: 30, occupation: 'Web Developer', location: 'Cityville' },
      { name: 'Jane Smith', age: 28, occupation: 'Designer', location: 'Townsville' },
      // Add more data objects as needed
    ];

    const columns = Object.keys(jsonData[0]);
    const data = jsonData.map(obj => Object.values(obj));

    pdf.autoTable({
      head: [columns],
      body: data,
      startX:0,
      startY:60
    });
  
    pdf.text('Hello world',60 , 10);
    pdf.text(content,0, 60); // Adjust positioning as needed
    pdf.save('json_data.pdf'); // Download the PDF
  };

    return (
      <div>
        <button onClick={generatePDF}>Generate PDF from JSON</button>
      </div>
    );
}

export default JSONToPDF;
