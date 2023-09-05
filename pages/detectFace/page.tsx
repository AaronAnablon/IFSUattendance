import styles from './yourStyles.module.css'; // Import your CSS module
import InitWebCam from '../../components/InitWebCam'; // Import your InitWebCam component
import RunHuman from '../../components/RunHuman'; // Import your RunHuman component
import Layout from 'components/Layout';

const Page = () => {

    return (
        <Layout>
            <canvas id="canvas" className={styles.output} /> {/* placeholder element that will be used by human for output */}
            <video id="video" className={styles.webcam} autoPlay muted /> {/* placeholder element that will be used by webcam */}
            <div id="status" className={styles.status}></div>
            <div id="log" className={styles.log}></div>
            <div id="performance" className={styles.performance}></div>
            <InitWebCam elementId="video" /> {/* initialized webcam using htmlvideo element with specified id */}
            <RunHuman inputId="video" outputId="canvas" /> {/* loads and start human using specified input video element and output canvas element */}
        </Layout>
    );
};

export default Page;
