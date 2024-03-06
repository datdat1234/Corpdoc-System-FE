import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector } from 'react-redux';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFRenderer({ page, setPage, totalPage, setTotalPage, scale }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const parentRef = useRef(null);
  const pageRef = useRef(null);
  const [numPages, setNumPages] = useState(1);
  const [isEnterPage, setIsEnterPage] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const fileInfo = useSelector((state) => state.app.fileInfo);
  var pageHeight = pageRef && pageRef && pageRef.current? pageRef.current.offsetHeight - (50*(scale / 100)): (scale / 100);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////  
  useEffect(() => {
    if(!isEnterPage) {
      var number = Math.floor(scrollOffset / pageHeight + 1);
      if (number > numPages) number = numPages;
      setPage(number);
    }
  }, [scrollOffset]);
  
  useEffect(() => {
    // console.log(page);
    // setIsEnterPage(false);
    // var number = pageHeight;
    // console.log(number)
    // document.getElementById('PDFCtn').scrollTo({
    //   top: number,
    //   behavior: "smooth"
    // });
  }, [page]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setTotalPage(numPages);
  }

  const handleScroll = () => {
    if (parentRef.current) {
      const scrollTop = parentRef.current.scrollTop;
      setScrollOffset(scrollTop);
    }
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <div
          key={i}
          className={`w-100 flex-column d-flex align-items-center justify-content-center ${styles.pageCtn}`}
          style={{ width: `calc(${scale / 100}*100%)` }}
          ref={pageRef}
        >
          <div className={`${styles.hiddenPage}`}>
            <Page scale={scale / 100} pageNumber={i} />
          </div>
          <div className={`${styles.pageSpace}`}></div>
        </div>
      );
    }
    return pages;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div 
      className={`${styles.root}`}
      ref={parentRef}
      onScroll={handleScroll}
      id="PDFCtn"
    >
      <div
        className={`${styles.PDFCtn}`}
        style={{
          width: `calc(${scale / 100}*100%)`,
        }}
      >
        <Document file={fileInfo?.Url} onLoadSuccess={onDocumentLoadSuccess}>
          {renderPages()}
        </Document>
      </div>
    </div>
  );
}
