import React from 'react'
import { useState } from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const Pdf = (props) => {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();



    return (
        <>

            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]}></Viewer>
            </Worker> */}
            <div>
                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">

                    <Viewer
                        fileUrl={props.pdf_file}
                        plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,

                        ]}
                    />
                </Worker> */}
            </div>


        </>
    )
}

export default Pdf