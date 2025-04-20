
const Projects = () => {
  const projects = [
    {
      title: "Mind Matrix",
      description: "Mind Matrix Learning marked the beginning of a platform designed to empower minds and elevate excellence in the EdTech space. Features include two-step verification and user-friendly UI.",
      tech: ["Django", "Python"]
    },
    {
      title: "Travel and Tourism website",
      description: "Detailed information about various travel destinations, including attractions, activities, local culture, and travel tips.",
      tech: ["Django", "Python"]
    },
    {
      title: "HealthE-Connect",
      description: "HealthE-Connect appears to be a website focused on telehealth and online doctor consultations.",
      tech: ["Django"]
    },
    {
      title: "Face Recognition System",
      description: "Designed a facial recognition-based authentication system for online exams. Utilized advanced Python libraries integrated with Django.",
      tech: ["Python", "Django"]
    }
  ];

  return (
    <div className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
