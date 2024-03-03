import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector } from 'react-redux';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFRenderer({ page, setPage, setTotalPage, scale }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const parentRef = useRef(null);
  const pageRef = useRef(null);
  const [numPages, setNumPages] = useState(1);
  const [scrollOffset, setScrollOffset] = useState(0);
  const fileInfo = useSelector((state) => state.app.fileInfo);
  var pageHeight = pageRef && pageRef.current? pageRef.current.offsetHeight - 50: (scale / 100);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////
  console.log(scrollOffset)

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    var number = Math.floor(scrollOffset / pageHeight + 1);
    if (number > numPages) number = numPages;
    setPage(number);
  }, [scrollOffset]);
  
  useEffect(() => {
    // var number = (page - 1)*pageHeight;
    // if (number > numPages) number = numPages;
    window.scrollTo(0, 1126);
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
