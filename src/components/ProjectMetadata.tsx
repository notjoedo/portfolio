function ProjectMetadata() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 lg:gap-20 xl:gap-40 mb-6 sm:mb-8">
      {/* Timeline */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-500 font-semibold mb-2">
          Timeline
        </h3>
        <p className="text-black text-xs sm:text-sm">10/10/25 - 10/12/25</p>
      </div>

      {/* Team */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-500 font-semibold mb-2">
          Team
        </h3>
        <div className="text-black text-xs sm:text-sm">
          <p>Joe Do</p>
          <p>Aman Anwar</p>
          <p>Shiva Pochampally</p>
          <p>Courtney Begoon</p>
        </div>
      </div>

      {/* My Role */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-500 font-semibold mb-2">
          My Role
        </h3>
        <div className="text-black text-xs sm:text-sm">
          <p>UI/UX Engineer</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectMetadata;
