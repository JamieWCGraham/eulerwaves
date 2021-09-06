import React, { useState, useEffect, useContext} from 'react';
import "../../components/singlePost/singlePost.css";
import "./about.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Resume from "./Resume.pdf"
import { useWindowWidth } from '@wojtekmaj/react-hooks';



export default function About() {


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const width = useWindowWidth();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        <div className="about">
            <div className="CVContainer">
            <Document
            className="CV"
            // file={Resume}
            file="https://pdfhost.io/v/0pozHEhDY_Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={Math.min(width, 1400)} size="A0" />
            </Document>
            </div>
        </div>
    )
}
