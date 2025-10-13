import { experiences } from '../data/experiences';
import TimelineItem from './TimelineItem';

function Experience() {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Bar - positioned to the right */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-black"
            style={{ 
              left: '60%'
            }}
          />

          {/* Timeline Items */}
          <div className="relative">
            {experiences.map((experience) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

