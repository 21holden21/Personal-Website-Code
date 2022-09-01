import { Worker, Viewer } from '@react-pdf-viewer/core';

//add toolbar for the pdf preview with default styling
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import resume from '../other_assets/Lance-Ondrej-Resume.pdf';

const ResumeViewerComponent = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin({  //generate default toolbar settings
        sidebarTabs: (defaultTabs) => [],  //but get rid of sidebar (sidebar is used for attachments/bookmarks, which isn't necessary in our case)
    });

    return (
        <div
            style={{ /* make the pdf preview panel 80% of the height and 75% of the width of the parent container */
                height: "80%",
                width: "75%"
            }}
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} theme="dark"/>
            </Worker>
        </div>
    )
}

export default ResumeViewerComponent