import { experiences } from '../data/experiences';
import TimelineItem from '../components/TimelineItem';

function Experience() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 md:px-8" aria-label="Experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="sr-only">Work Experience</h2>
        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Bar - positioned to the right */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-[1.5px] bg-black"
            style={{ 
              left: '60%'
            }}
            aria-hidden="true"
          />

          {/* Mobile Timeline Bar - positioned to the right */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-[1px] bg-black"
            style={{ 
              right: '20px'
            }}
            aria-hidden="true"
          />

          {/* Timeline Items */}
          <div className="relative" role="list">
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

