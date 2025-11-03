import AtlasNavbar from "../components/AtlasNavbar";
import ProjectMetadata from "../components/ProjectMetadata";
import Logo from "../images/Logo.svg";
import LandingPageImage from "../images/landing_page.jpg";
import FeedImage from "../images/feed.jpg";
import AtlasCanvasImage from "../images/BoundlessCanvas.png";
import AtlasCreationImage from "../images/AtlasCreate.png";
import BookingImage from "../images/booking.png";
import PassportImage from "../images/Passport.png";
import SocialImage from "../images/AtlasSocialMedia.png";
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Atlas() {
  const [navbarTitle, setNavbarTitle] = useState("ATLAS");
  const [isLoaded, setIsLoaded] = useState(false);
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const challengesSectionRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts and trigger fade-in
  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger fade-in animation after a brief delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const middleOfScreen = viewportHeight / 2;

      // Check challenges section first (most recent)
      if (challengesSectionRef.current) {
        const challengesRect =
          challengesSectionRef.current.getBoundingClientRect();
        const challengesVisible = challengesRect.top <= middleOfScreen;

        if (challengesVisible) {
          setNavbarTitle("Challenges & Future Implementations");
          return;
        }
      }

      // Check solution section
      if (solutionSectionRef.current) {
        const solutionRect = solutionSectionRef.current.getBoundingClientRect();
        const solutionVisible = solutionRect.top <= middleOfScreen;

        if (solutionVisible) {
          setNavbarTitle("Proposed Solution");
          return;
        }
      }

      // Check problem section
      if (problemSectionRef.current) {
        const problemRect = problemSectionRef.current.getBoundingClientRect();
        const problemVisible = problemRect.top <= middleOfScreen;

        if (problemVisible) {
          setNavbarTitle("The Problem");
          return;
        }
      }

      // Only go back to ATLAS if we're above the problem section
      if (problemSectionRef.current) {
        const problemRect = problemSectionRef.current.getBoundingClientRect();
        if (problemRect.top > middleOfScreen) {
          setNavbarTitle("ATLAS");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`min-h-screen flex flex-col lg:flex-row transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navbar Section */}
      <AtlasNavbar title={navbarTitle} />

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-200 p-4 sm:p-6 lg:p-8">
        {/* Atlas Logo */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 mt-4 sm:mt-8 lg:mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.img
            src={Logo}
            alt="ATLAS logo"
            className="h-24 sm:h-32 lg:h-40 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ProjectMetadata />
        </motion.div>

        {/* Horizontal Divider */}
        <motion.div
          className="w-auto h-px bg-gray-300 mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        ></motion.div>

        {/* Prompt and Vision */}
        <motion.div
          className="ml-2 sm:ml-6 lg:ml-9 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span
              className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] tracking-wider"
              style={{ fontWeight: 200 }}
            >
              prompt:{" "}
            </span>
            <motion.span
              className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] italic"
              style={{ fontWeight: 200 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              "Booking to Belonging"
            </motion.span>
          </motion.div>

          <motion.p
            className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Our vision came from the concept of a boundless canvas for travel,
            as we observed that conventional trip planners stifle the creative,
            non-linear way people dream of adventure. We set out to build a
            platform that transforms planning from a rigid task into an act of
            creation, where scattered ideas, map points, and budget details
            could be woven together into a masterpiece.
          </motion.p>
        </motion.div>

        {/* Landing Page Image */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={LandingPageImage}
            alt="Atlas Landing Page"
            className="w-full h-auto rounded-lg shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* The Problem*/}
        <motion.div
          ref={problemSectionRef}
          className="ml-2 sm:ml-6 lg:ml-9 space-y-4 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] italic"
              style={{ fontWeight: 200 }}
            >
              "The Problem"
            </span>
          </motion.div>

          <motion.p
            className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marriott's CodeFest's theme was "Booking to Belonging". Participants
            were tasked with building a platform that would help users book
            travel experiences and help them connect with others, creating a
            sense of belonging.
          </motion.p>
        </motion.div>

        {/* Proposed Solution*/}
        <motion.div
          ref={solutionSectionRef}
          className="ml-2 sm:ml-6 lg:ml-9 space-y-4 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] italic"
              style={{ fontWeight: 200 }}
            >
              "Proposed Solution from a UI/UX Perspective"
            </span>
          </motion.div>

          {/* Inspiration to Creation */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Inspiration to Creation
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              To begin my design process, I had to figure out the user story and
              how user interactions should flow. After account registration,
              users should be able to see an interactive landing page and
              immediately follow through to the feed page where inspiration and
              creation begin.
            </motion.p>
          </motion.div>

          {/* Feed Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={FeedImage}
              alt="Atlas Feed Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Infinite Canvas Atlas */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Atlas Canvas
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I liked the idea of an infinite canvas to jot down ideas and
              continue adding "nodes" to the canvas as users discover new places
              or experiences. I felt like this revolutionizes the process of
              trip planning, removing the traditional checklist format and
              replacing it with a more organic and creative approach.
            </motion.p>
          </motion.div>

          {/* Atlas Canvas Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={AtlasCanvasImage}
              alt="Atlas Canvas Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Quick Note 1 */}
          <div className="space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] tracking-wider leading-relaxed lg:leading-loose">
              Quick Note 1: Features like the Atlas AI helps users brainstorm
              ideas and continue adding "nodes" to their canvas. There is also a
              manual search feature, allowing for flexibility in the search
              process.
            </p>
          </div>

          {/* Atlas Creation Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={AtlasCreationImage}
              alt="Atlas Creation Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Quick Note 2 */}
          <div className="space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] tracking-wider leading-relaxed lg:leading-loose">
              Quick Note 2: This is where users can manage and view their Atlas
              creations.
            </p>
          </div>

          {/* All-in-one Platform */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              An all-in-one platform
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              After creating a canvas, what's next? I had this question in mind
              and decided, a user's experience should not stop at an Atlas
              creation. Users should be able to book their trips right then and
              there! Booking should not stop there, our platform optimizes the
              booking process by analyzing the user's board and generating an
              itinerary for them with the best deals.
            </motion.p>
          </motion.div>

          {/* Booking Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={BookingImage}
              alt="Atlas Booking Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Looking back */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Looking back...
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Users should be able to see their previous trips and their Atlas
              creations. This allows users to return to the platform.
            </motion.p>
          </motion.div>

          {/* Passport Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={PassportImage}
              alt="Atlas Passport Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Quick Note 3 */}
          <div className="space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] tracking-wider leading-relaxed lg:leading-loose">
              Quick Note 3: Users can press the "globe" icon to view the Atlas
              they created when they initially planned their trip. This will
              take them back to the Atlas creation page.
            </p>
          </div>

          {/* Challenges and Future Implementations*/}
          <motion.div
            ref={challengesSectionRef}
            className="space-y-4 mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] italic"
                style={{ fontWeight: 200 }}
              >
                "Challenges and Future Implementations"
              </span>
            </motion.div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Challenges
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The biggest challenge during this CodeFest was the time
              constraint. Figuring out how to tie together a cohesive user story
              and flow was difficult as we often drifted away from the original
              problem.
            </motion.p>
          </motion.div>

          {/* Future Implementations */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-orange-500 text-xl sm:text-2xl lg:text-3xl xl:text-[40px] block"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Future Implementations
            </motion.span>
            <motion.p
              className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I designed a wireframe to showcase how a social aspect can keep
              users engaged and coming back to Atlas.
            </motion.p>
          </motion.div>

          {/* Atlas Social Media Image */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={SocialImage}
              alt="Atlas Social Media Page"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          {/* Quick Note 4 */}
          <div className="space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] tracking-wider leading-relaxed lg:leading-loose">
              Quick Note 4: This is a wireframe, we did not have time to
              implement this feature in the actual project.
            </p>
          </div>

          <motion.p
            className="text-black text-base sm:text-xl lg:text-2xl xl:text-[30px] tracking-wider font-light leading-relaxed lg:leading-loose mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            If you're interested in learning more about Atlas's technical
            implementation, you can check out the Devpost link below:
          </motion.p>
          <motion.a
            href="https://devpost.com/software/atlas-4kd1lf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View ATLAS Devpost submission (opens in new tab)"
            className="inline-flex items-center gap-2 text-orange-500 text-base sm:text-lg font-bold hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Devpost Link
            <ExternalLink size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Atlas;
