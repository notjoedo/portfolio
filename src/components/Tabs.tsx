import { useRef, useEffect, useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let targetIndex = currentIndex;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      targetIndex = (currentIndex + 1) % tabs.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      e.preventDefault();
    } else if (e.key === 'Home') {
      targetIndex = 0;
      e.preventDefault();
    } else if (e.key === 'End') {
      targetIndex = tabs.length - 1;
      e.preventDefault();
    }
    
    if (targetIndex !== currentIndex) {
      onTabChange(tabs[targetIndex].id);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center px-4 w-full">
      <div className="inline-flex bg-[#D8D8D8] rounded-full relative w-full max-w-lg sm:max-w-md md:max-w-2xl lg:max-w-3xl" style={{ padding: isSmallScreen ? '4px' : '6px' }}>
        {/* Sliding indicator */}
        <div
          className="absolute rounded-full transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            top: isSmallScreen ? '4px' : '6px',
            bottom: isSmallScreen ? '4px' : '6px',
            backgroundColor: '#466EA2',
          }}
          aria-hidden="true"
        />
        
        {/* Tabs */}
        <div className="flex w-full justify-between">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`
                relative z-10 flex-1 rounded-full font-medium transition-colors duration-200 text-sm md:text-base focus:outline-none
                ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-909'
                }
              `}
              style={{ padding: isSmallScreen ? '1px 16px' : '6px 16px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;

