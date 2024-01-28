import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFRenderer({ setPage, setTotalPage, scale }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const parentRef = useRef(null);
  const windowHeight = window.innerHeight;
  const [numPages, setNumPages] = useState(1);
  const [scrollOffset, setScrollOffset] = useState(0);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    var number = Math.ceil(scrollOffset / windowHeight + 1);
    if (number > numPages) number = numPages;
    setPage(number);
  }, [scrollOffset]);
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
          className={`w-100 d-flex align-items-center justify-content-center ${styles.pageCtn}`}
        >
          <div
            className={`${styles.hiddenPage}`}
            style={{
              height: `calc(${scale / 100}*90vh)`,
            }}
          >
            <Page scale={scale / 100} pageNumber={i} />
          </div>
        </div>
      );
    }
    return pages;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`w-100 h-100 ${styles.root}`}
      ref={parentRef}
      onScroll={handleScroll}
    >
      <Document file="/asset/TEST.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {renderPages()}
      </Document>
    </div>
  );
}
