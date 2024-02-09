import React, { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import PdfView from './pdf';
import { imageDb } from './FireBase';


function PdfFire({RouteName, PdfPath}) {
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    listAll(ref(imageDb, 'pdf'))
      .then(imgs => {
        imgs.items.forEach(val => {
          getDownloadURL(val)
            .then(url => {
              setImgURL(data => [...data, url]);
            })
            .catch(error => {
              console.error('Error fetching PDF URL:', error);
            });
        });
        return 0
      })
      
      .catch(error => {
        console.error('Error listing PDF files:', error);
      });
    
    //setPUrl(temp);
  }, []);
     
  let pUrl = 0

        for (let index = 0; index < imgURL.length; index++) {
          if (imgURL[index].includes(PdfPath)){
            pUrl = index;
          }
        }

  // console.log('PDF URLL', String(temp));

  return (
      <div>
      <PdfView routeName= {RouteName} pdfName={imgURL[pUrl]}></PdfView>

      </div>

  );
}

export default PdfFire;
