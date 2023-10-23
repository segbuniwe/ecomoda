import React from "react";

function CommunityGuidelines() {
  return (
    <div className='mx-auto max-w-7xl bg-gray-100 my-12 rounded-xl py-12'>
      <div className='mx-auto max-w-6xl py-6 px-6'>
        <h1 className='text-4xl font-bold'>
          Registration & Community Guidelines
        </h1>
        <p className='py-6 text-xl'>
          <strong>
            TO BEGIN SEARCHING FOR CLOTHES OR CREATING CLOTHING LISTINGS FOR
            OTHERS TO FIND, MAKE SURE TO REGISTER FOR AN ACCOUNT OR LOG INTO
            YOUR EXISTING ACCOUNT.
          </strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Registration and Profile:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                Provide accurate information during registration, including your
                name, email address, and location, to ensure transparency and
                trust within the community.
              </li>
              <li className='list-disc mx-8'>
                Include information about your clothing sizes and style
                preferences in your profile to help other members understand
                your tastes and needs.
              </li>
              <li className='list-disc mx-8'>
                You should be able to easily edit or update your profile at any
                time to keep it current and relevant.
              </li>
            </ol>
          </li>
          <li>
            <p className='pt-3'>
              <strong>Posting Items:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                Clearly define what types of clothing can be posted (e.g.,
                gently used, clean, and in good condition). Follow these
                criteria to maintain the quality of items being exchanged.
              </li>
              <li className='list-disc mx-8'>
                Provide detailed descriptions for each item you post, including
                brand, size, color, and condition to help potential recipients
                make informed decisions.
              </li>
              <li className='list-disc mx-8'>
                Upload clear photos of the clothing that accurately represent
                the item's condition, color, and features. High-quality images
                build trust among users.
              </li>
              <li className='list-disc mx-8'>
                Use eco-friendly shipping practices, such as reusable packaging
                materials, minimal waste, and consideration of environmentally
                responsible options when packaging and shipping clothing items.
              </li>
              <li className='list-disc mx-8'>
                Alternatively, if comfortable, arrange a meetup somewhere public
                and safe in your city to give someone the agreed upon item.
              </li>
            </ol>
          </li>
          <li>
            <p className='pt-3'>
              <strong>Communication and Interaction:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                Communicate respectfully with other users. Avoid hate speech,
                discrimination, offensive content, or any behavior that might
                harm the community's positive atmosphere.
              </li>
              <li className='list-disc mx-8'>
                Respond to messages and notifications in a timely manner to
                facilitate smooth exchanges.
              </li>
              <li className='list-disc mx-8'>
                Leave feedback and ratings after an exchange to help build trust
                and transparency within the community. Be honest and
                constructive in your feedback.
              </li>
            </ol>
          </li>
          <li>
            <p className='pt-3'>
              <strong>Privacy and Security:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                Familiarize yourself with the app's privacy settings and use
                them to control what information is visible to others.
              </li>
              <li className='list-disc mx-8'>
                Do not share personal or sensitive information, such as your
                address, outside of the app's messaging system.
              </li>
            </ol>
          </li>
          <li>
            <p className='pt-3'>
              <strong>Dispute Resolution:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                If you encounter any issues, disputes, or problems during an
                exchange, contact the app's support team for assistance. Provide
                all relevant information.
              </li>
              <li className='list-disc mx-8'>
                Be open to a fair resolution process mediated by the app's
                support team to address disputes or conflicts between users.
              </li>
            </ol>
          </li>
          <li>
            <p className='pt-3'>
              <strong>Community Engagement:</strong>
            </p>
            <ol type='a'>
              <li className='list-disc mx-8'>
                Engage actively with the community by offering and receiving
                clothing items, joining discussions, and contributing positively
                to the platform.
              </li>
              <li className='list-disc mx-8'>
                Share tips and information on sustainable clothing practices
                with other users to promote eco-friendly behavior.
              </li>
            </ol>
          </li>
        </ol>
        <p className='text-lg py-3'>
          By following these guidelines, you can help create a sustainable,
          respectful, and positive clothing exchange community within the app.
        </p>
      </div>
    </div>
  );
}

export default CommunityGuidelines;
