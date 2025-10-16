import AtlasNavbar from '../components/AtlasNavbar';
import ProjectMetadata from '../components/ProjectMetadata';
import Logo from '../images/Logo.svg';
import LandingPageImage from '../images/landing_page.jpg';
import FeedImage from '../images/feed.jpg';
import AtlasCanvasImage from '../images/BoundlessCanvas.png';
import AtlasCreationImage from '../images/AtlasCreate.png';
import BookingImage from '../images/booking.png';
import PassportImage from '../images/Passport.png';
import SocialImage from '../images/AtlasSocialMedia.png';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

function Atlas() {
  const [navbarTitle, setNavbarTitle] = useState('ATLAS');
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const challengesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const middleOfScreen = viewportHeight / 2;
      
      // Check challenges section first (most recent)
      if (challengesSectionRef.current) {
        const challengesRect = challengesSectionRef.current.getBoundingClientRect();
        const challengesVisible = challengesRect.top <= middleOfScreen;
        
        if (challengesVisible) {
          setNavbarTitle('Challenges & Future Implementations');
          return;
        }
      }
      
      // Check solution section
      if (solutionSectionRef.current) {
        const solutionRect = solutionSectionRef.current.getBoundingClientRect();
        const solutionVisible = solutionRect.top <= middleOfScreen;
        
        if (solutionVisible) {
          setNavbarTitle('Proposed Solution');
          return;
        }
      }
      
      // Check problem section
      if (problemSectionRef.current) {
        const problemRect = problemSectionRef.current.getBoundingClientRect();
        const problemVisible = problemRect.top <= middleOfScreen;
        
        if (problemVisible) {
          setNavbarTitle('The Problem');
          return;
        }
      }
      
      // Only go back to ATLAS if we're above the problem section
      if (problemSectionRef.current) {
        const problemRect = problemSectionRef.current.getBoundingClientRect();
        if (problemRect.top > middleOfScreen) {
          setNavbarTitle('ATLAS');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen flex">
      {/* Navbar Section */}
      <AtlasNavbar title={navbarTitle} />
      
      {/* Main Content Section */}
      <div className="flex-1 bg-gray-200 p-8">
        {/* Atlas Logo */}
        <div className="flex justify-center mb-12 mt-12">
          <img src={Logo} alt="ATLAS" className="h-40 w-auto" />
        </div>
        
        <ProjectMetadata />
        
        {/* Horizontal Divider */}
        <div className="w-auto h-px bg-gray-300 mb-8"></div>
        
        {/* Prompt and Vision */}
        <div className="ml-9 space-y-4">
          <div>
            <span className="text-orange-500 text-[60px] tracking-wider" style={{ fontWeight: 200 }}>prompt: </span>
            <span className="text-orange-500 text-[60px] italic" style={{ fontWeight: 200 }}>"Booking to Belonging"</span>
          </div>
          
          <p className="text-black text-[30px] tracking-wider font-light leading-loose">
            Our vision came from the concept of a boundless canvas for travel, 
            as we observed that conventional trip planners stifle the creative, 
            non-linear way people dream of adventure. We set out to build a platform 
            that transforms planning from a rigid task into an act of creation, where 
            scattered ideas, map points, and budget details could be woven together 
            into a masterpiece.
          </p>
        </div>

        {/* Landing Page Image */}
        <div className="mt-16">
          <img 
            src={LandingPageImage} 
            alt="Atlas Landing Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

         {/* The Problem*/}
         <div ref={problemSectionRef} className="ml-9 space-y-4 mt-16">
          <div>
            <span className="text-orange-500 text-[60px] italic" style={{ fontWeight: 200 }}>
                "The Problem"
                </span>
          </div>
          
          <p className="text-black text-[30px] tracking-wider font-light leading-loose">
            Marriott's CodeFest's theme was "Booking to Belonging". Participants were tasked
             with building a platform that would help users book travel experiences and help them
             connect with others, creating a sense of belonging. 
          </p>
        </div>

         {/* Proposed Solution*/}
         <div ref={solutionSectionRef} className="ml-9 space-y-4 mt-16">
          <div>
            <span className="text-orange-500 text-[60px] italic" style={{ fontWeight: 200 }}>
                "Proposed Solution from a UI/UX Perspective"
                </span>
          </div>
          
          {/* Inspiration to Creation */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    Inspiration to Creation</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                To begin my design process, I had to figure out the user story and how user interactions 
                should flow. After account registration, users should be able to see an interactive landing page 
                and immediately follow through to the feed page where inspiration and creation begin.
            </p>
          </div>

        {/* Feed Image */}
          <div className="mt-16">
          <img 
            src={FeedImage} 
            alt="Atlas Feed Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

          {/* Infinite Canvas Atlas */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    Atlas Canvas</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                I liked the idea of an infinite canvas to jot down ideas and continue adding "nodes" 
                to the canvas as users discover new places or experiences. I felt like this revolutionizes 
                the process of trip planning, removing the traditional checklist format and replacing it with a 
                more organic and creative approach.
            </p>
          </div>

        {/* Atlas Canvas Image */}
        <div className="mt-16">
          <img 
            src={AtlasCanvasImage} 
            alt="Atlas Canvas Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Quick Note 1 */}
        <div className='space-x-2'>
        <p className="text-gray-500 text-[15px] tracking-wider leading-loose">
            Quick Note 1: Features like the Atlas AI helps users brainstorm ideas and continue adding "nodes" to their 
            canvas. There is also a manual search feature, allowing for flexibility in the search process.
        </p>
        </div>

        {/* Atlas Creation Image */}
        <div className="mt-16">
          <img 
            src={AtlasCreationImage} 
            alt="Atlas Creation Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Quick Note 2 */}
        <div className='space-x-2'>
        <p className="text-gray-500 text-[15px] tracking-wider leading-loose">
            Quick Note 2: This is where users can manage and view their Atlas creations.
        </p>
        </div>

          {/* All-in-one Platform */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    An all-in-one platform</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                After creating a canvas, what's next? I had this question in mind and decided, a user's experience 
                should not stop at an Atlas creation. Users should be able to book their trips right then and there!
                Booking should not stop there, our platform optimizes the booking process by analyzing the user's board 
                and generating an itinerary for them with the best deals.
            </p>
          </div>

        {/* Booking Image */}
        <div className="mt-16">
          <img 
            src={BookingImage} 
            alt="Atlas Booking Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

          {/* All-in-one Platform */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    Looking back...</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                Users should be able to see their previous trips and their Atlas creations. This allows users to return to the platform.
            </p>
          </div>

        {/* Landing Page Image */}
        <div className="mt-16">
          <img 
            src={PassportImage} 
            alt="Atlas Passport Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Quick Note 3 */}
        <div className='space-x-2'>
        <p className="text-gray-500 text-[15px] tracking-wider leading-loose">
            Quick Note 3: Users can press the "globe" icon to view the Atlas they created when 
            they initially planned their trip. This will take them back to the Atlas creation page.
        </p>
        </div>

         {/* Challenges and Future Implementations*/}
         <div ref={challengesSectionRef} className="ml-9 space-y-4 mt-16">
          <div>
            <span className="text-orange-500 text-[60px] italic" style={{ fontWeight: 200 }}>
                "Challenges and Future Implementations"
                </span>
          </div>     
        </div>

          {/* Challenges */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    Challenges</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                The biggest challenge during this CodeFest was the time constraint. Figuring out how to tie 
                together a cohesive user story and flow was difficult as we often drifted away from the original problem.
            </p>
          </div>

          {/* Future Implementations */}
          <div className='space-x-2'>
            <span className="text-orange-500 text-[40px]" style={{ fontWeight: 500 }}>
                    Future Implementations</span>
            <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                I designed a wireframe to showcase how a social aspect can keep users engaged and coming back to Atlas.
            </p>
          </div>


        {/* Atlas Social Media Image */}
        <div className="mt-16">
          <img 
            src={SocialImage} 
            alt="Atlas Social Media Page" 
            className="w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>
        {/* Quick Note 4 */}
        <div className='space-x-2'>
        <p className="text-gray-500 text-[15px] tracking-wider leading-loose">
            Quick Note 4: This is a wireframe, we did not have time to implement this feature in the actual project.
        </p>
        </div>

        <p className="text-black text-[30px] tracking-wider font-light leading-loose">
                If you're interested in learning more about Atlas's technical implementation, you can check out the Devpost link below:
            </p>
            <a href="https://devpost.com/software/atlas-4kd1lf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors duration-300">
                Devpost Link
                <ExternalLink size={16} />
            </a>


        </div>
      </div>
    </div>
  );
}

export default Atlas;