import { experiences } from '../data/experiences';
import TimelineItem from '../components/TimelineItem';

function Experience() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Bar - positioned to the right */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-[1.5px] bg-black"
            style={{ 
              left: '60%'
            }}
          />

          {/* Mobile Timeline Bar - positioned to the right */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-[1px] bg-black"
            style={{ 
              right: '20px'
            }}
          />

          {/* Timeline Items */}
          <div className="relative">
            {[...experiences].map((experience, index) => (
              <TimelineItem key={`${experience.id}-${index}`} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

