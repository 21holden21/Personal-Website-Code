import '../styles/ResumePage.css';
import ResumeViewerComponent from './PdfViewer';
import resume from '../other_assets/Lance-Ondrej-Resume.pdf';

const ResumePageComponent = () => {
  return (

      <div className="resume-content over-particles d-flex flex-column justify-content-center align-items-center">

        <a className="pdf-link" href={resume} download>Download Resume as PDF</a>
        <ResumeViewerComponent/>

      </div>
  );
}

export default ResumePageComponent;