import videoFile from "../styles/EcoModa-Updated.mp4";
import { Link } from "react-router-dom";

function EducationPage() {
  return (
    <div className='mx-auto max-w-6xl bg-gray-100 py-6 my-12 rounded-xl'>
      <div className='mx-auto max-w-5xl py-6 px-6'>
        <video controls width='1280' height='720'>
          <source src={videoFile} type='video/mp4' />
        </video>
        <div className='py-6'>
          <h1 className='text-4xl py-3'>Community Tips & Videos</h1>
          <p className='py-2'>
            Welcome to our Sustainable Fashion Resource Hub, where we delve
            deeper into the world of eco-conscious style. Sustainable fashion is
            more than just clothing; it's a mindset, a commitment to circularity
            and cradle-to-cradle design. We believe that responsible fashion
            management starts with you, and that's why we're here to guide you
            every step of the way.
          </p>
          <p className='py-2'>
            Discover the art of circular fashion as we explore designs that
            breathe new life into clothing, demonstrating how materials can be
            recycled and repurposed. Witness the transformation – see garments
            reborn, repurposed into new and exciting styles, reflecting our
            commitment to reducing waste and embracing creativity.
          </p>
          <p className='py-2'>
            Our educational content goes beyond the surface, providing insights
            into caring for your clothing items, from proper washing techniques
            to innovative ways to extend their lifecycle. We emphasize buying
            less and loving your fashion choices more.
          </p>
          <p className='py-2'>
            As a community-driven clothing exchange platform, our app connects
            like-minded individuals, promoting a more mindful and eco-friendly
            approach to fashion. Our users are actively engaging in sustainable
            practices, swapping, sharing, and experiencing the positive impact
            they can make on the environment.
          </p>
          <p className='py-2'>
            Join our movement for a greener, more sustainable future. Explore
            our app today, and become part of the sustainable fashion
            revolution. Together, we can make a positive change, one stylish,
            eco-friendly choice at a time.
          </p>
          <h1 className='text-xl py-3 font-bold'>Shout Out!</h1>
          <p>
            Thanks to Edmond Lau and Saskia Fairfull of the IFAB (The
            Independent Fashion Advisory Board) community for giving us even
            more insight into sustainable and eco-friendly fashion. Please reach
            out to IFAB{" "}
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
    </div>
  );
}

export default EducationPage;
