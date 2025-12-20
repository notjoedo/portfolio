import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ANIMATION_CONFIG = {
  duration: 0.15,
  ease: [0.4, 0, 0.2, 1] as const,
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isSun = theme === 'light';

  const linkClassName = "text-[#252525] dark:text-[#D9D9D9] font-coolvetica-condensed hover:opacity-70 transition-opacity cursor-pointer py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-5";

  return (
    <header className="w-full pt-4 sm:pt-6 pr-4 sm:pr-6 md:pr-12 lg:pr-16 flex items-center justify-end text-base sm:text-lg md:text-xl lg:text-[25px]">
      <Link to="/" className={linkClassName}>
        home
      </Link>
      <Link to="/about" className={linkClassName}>
        about
      </Link>
      <Link to="/contact" className={linkClassName}>
        contact
      </Link>
      <button
        onClick={toggleTheme}
        className="hover:opacity-70 transition-opacity cursor-pointer relative w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 flex items-center justify-center p-2 sm:p-2.5 md:p-3 ml-4 sm:ml-6 md:ml-8"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{
            scale: isSun ? 1 : 0,
            rotate: isSun ? 0 : 180,
            opacity: isSun ? 1 : 0,
          }}
          transition={ANIMATION_CONFIG}
          className="absolute"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 text-[#252525] dark:text-[#D9D9D9]"
          >
            <g clipPath="url(#clip0_126_115)">
              <path 
                d="M16.0002 1.33334V4.00001M16.0002 28V30.6667M5.62683 5.62668L7.52016 7.52001M24.4802 24.48L26.3735 26.3733M1.3335 16H4.00016M28.0002 16H30.6668M5.62683 26.3733L7.52016 24.48M24.4802 7.52001L26.3735 5.62668M22.6668 16C22.6668 19.6819 19.6821 22.6667 16.0002 22.6667C12.3183 22.6667 9.3335 19.6819 9.3335 16C9.3335 12.3181 12.3183 9.33334 16.0002 9.33334C19.6821 9.33334 22.6668 12.3181 22.6668 16Z" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_126_115">
                <rect width="32" height="32" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: !isSun ? 1 : 0,
            rotate: !isSun ? 0 : -180,
            opacity: !isSun ? 1 : 0,
          }}
          transition={ANIMATION_CONFIG}
          className="absolute"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 text-[#252525] dark:text-[#D9D9D9]"
          >
            <path 
              d="M27.9999 17.0533C27.7901 19.3229 26.9383 21.4859 25.5442 23.2891C24.15 25.0922 22.2712 26.4611 20.1275 27.2354C17.9838 28.0097 15.6638 28.1575 13.4392 27.6615C11.2146 27.1654 9.17719 26.0461 7.5655 24.4344C5.95381 22.8227 4.83445 20.7853 4.33841 18.5607C3.84237 16.336 3.99016 14.0161 4.76448 11.8724C5.53881 9.72868 6.90764 7.84982 8.71082 6.45567C10.514 5.06152 12.6769 4.20974 14.9465 4C13.6178 5.79769 12.9783 8.0126 13.1446 10.2419C13.3108 12.4712 14.2717 14.5667 15.8524 16.1475C17.4331 17.7282 19.5287 18.689 21.758 18.8553C23.9873 19.0215 26.2022 18.3821 27.9999 17.0533Z" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
    </header>
  );
};

export default Header;

