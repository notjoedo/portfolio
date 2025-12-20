import type { ReactNode } from 'react';

const Icon = ({ children, className }: { children: ReactNode; className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const Footer = () => {
  const iconClassName = "w-5 h-5 sm:w-6 sm:h-6";
  const linkClassName = "text-[#252525] dark:text-[#D9D9D9] hover:text-[#37AB31] transition-colors";

  return (
    <footer className="w-full pb-4 sm:pb-6 mt-auto">
      <div className="w-full border-t border-[#CAC4D0] dark:border-[#4A4A4A] mb-3 sm:mb-4 mx-auto max-w-[95%]"></div>
      <p className="text-center text-[#252525] dark:text-[#D9D9D9] font-coolvetica-condensed tracking-wide text-xs sm:text-sm mb-2 sm:mb-3">
        © 2025 Joe (Hoang) Do
      </p>
      <div className="flex justify-center gap-4 items-center">
        <a href="https://github.com/notjoedo" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="GitHub">
          <Icon className={iconClassName}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </Icon>
        </a>
        <a href="https://www.linkedin.com/in/hoanglehuydo/" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="LinkedIn">
          <Icon className={iconClassName}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </Icon>
        </a>
        <a href="https://www.youtube.com/@joedocodes/" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="YouTube">
          <Icon className={iconClassName}>
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
          </Icon>
        </a>
        <a href="https://x.com/notjoedo" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="Twitter">
          <Icon className={iconClassName}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </Icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
