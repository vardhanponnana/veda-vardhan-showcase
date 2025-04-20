
const Education = () => {
  const education = [
    {
      degree: "B.Tech in Data Science",
      institution: "Mallareddy University",
      location: "Maisammaguda, Telangana",
      grades: "SGPA: 8.35 (1st Sem), 7.12 (2nd Sem) | Overall CGPA: 7.74",
      ongoing: true
    },
    {
      degree: "Intermediate (10+2)",
      institution: "Sri Chaitanya junior college",
      location: "Visakhapatnam, Andhra Pradesh",
      grades: "Marks: 922 (Board Exams)"
    },
    {
      degree: "10th Grade",
      institution: "Gayatri School",
      location: "Srikakulam, Andhra Pradesh",
      grades: "GPA: 9.7/10"
    }
  ];

  return (
    <div className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                {edu.degree}
                {edu.ongoing && (
                  <span className="ml-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                    Ongoing
                  </span>
                )}
              </h3>
              <p className="text-gray-600 mt-2">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.location}</p>
              <p className="text-green-600 mt-2 font-medium">{edu.grades}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
