import videoFile from "../styles/EcoModa-Updated.mp4";
import { Link } from "react-router-dom";

function EducationPage() {
  return (
    <div className='mx-auto max-w-3xl bg-gray-50 py-6 my-12 rounded-xl'>
      <h1>Community Tips & Videos</h1>
      <video controls width='640' height='360'>
        <source src={videoFile} type='video/mp4' />
      </video>
      <div className='shout-out'>
        <h1>Shout Out!</h1>
        <p>
          Thanks to Edmond Lau and Saskia Fairfull of the IFAB (The Independent
          Fashion Advisory Board) community for giving us even more insight into
          sustainable and eco-friendly fashion. Please reach out to IFAB{" "}
          <Link
            className='link'
            to='https://www.linkedin.com/company/independent-fashion-advisory-board/'
          >
            here
          </Link>{" "}
          to gain more knowledge and expand your horizons in sustainability.
        </p>
      </div>
    </div>
  );
}

export default EducationPage;
