import React, { useState } from "react";
import { useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/SQL NOTES.pdf";
import { useHotkeys } from "react-hotkeys-hook";

export default function Module12Ppt({
  showNext,
  showPrevious,
  zoomIn,
  zoomOut,
  fullScreen,
}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }

  function handleZoomIn() {
    const newScale = pageScale + 0.2;
    if (newScale <= 3) {
      setPageScale(newScale);
    }
  }

  function handleZoomOut() {
    const newScale = pageScale - 0.2;
    if (newScale >= 0.8) {
      setPageScale(newScale);
    }
  }

  //function to move slides next effect
  function handleNext() {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  //function to move slides previous
  function handlePrevious() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  //function to handling full screen
  function handleOpenFullscreen() {
    const doc = document.querySelector(".page-container");
    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen();
    }
    // document.addEventListener("keydown", handleKeyDown);
  }

  //full screen left switch
  useHotkeys("left", () => {
    handlePrevious();
  });

  //full screen right switch
  useHotkeys("right", () => {
    handleNext();
  });

  useEffect(() => {
    if (showNext > 0) {
      handleNext();
    }
  }, [showNext]);

  useEffect(() => {
    if (showPrevious > 0) {
      handlePrevious();
    }
  }, [showPrevious]);

  useEffect(() => {
    if (zoomIn > 0) {
      handleZoomIn();
    }
  }, [zoomIn]);

  useEffect(() => {
    if (zoomOut > 0) {
      handleZoomOut();
    }
  }, [zoomOut]);

  useEffect(() => {
    if (fullScreen > 0) {
      handleOpenFullscreen();
    }
  }, [fullScreen]);

  return (
    <div className="OneShow">
      <div className="page-container">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={pageScale} />
        </Document>
      </div>
      <div className="footer">
        <div className="page-text">
          Page {pageNumber} of {totalPages}
        </div>
      </div>
    </div>
  );
}
