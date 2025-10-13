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

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex bg-[#D8D8D8] rounded-full p-1.5 relative" style={{ minWidth: '700px' }}>
        {/* Sliding indicator */}
        <div
          className="absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            backgroundColor: '#466EA2',
          }}
        />
        
        {/* Tabs */}
        <div className="flex w-full justify-between">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative z-10 flex-1 py-2.5 rounded-full font-medium transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }
              `}
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

