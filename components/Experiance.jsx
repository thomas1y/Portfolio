import React from 'react';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'Tekstar Solutions',
    date: 'Jul 2023 – Nov 2024',
    location: 'Remote, US',
    responsibilities: [
      'Maintained and enhanced the performance, scalability, and responsiveness of a dynamic online learning platform.',
      'Updated and refactored existing codebases to adopt best practices in React.js and modern JavaScript.',
      'Integrated RESTful APIs to dynamically fetch and display content, optimizing data rendering processes.',
    ],
  },
  {
    title: 'React Developer',
    company: "SYNC INTERN'S",
    date: 'Mar 2023 – Jun 2023',
    location: 'Remote, India',
    responsibilities: [
      'Built and deployed four interactive web applications using React.js, demonstrating proficiency in building reusable components and managing application state.',
    ],
  },
  {
    title: 'Web Development and Design Intern',
    company: 'The Sparks Foundation',
    date: '',
    location: 'Remote, Singapore',
    responsibilities: [
      'Assisted in designing and developing responsive web pages using HTML, CSS, and JavaScript, improving site usability and accessibility.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mt-1">
              <span>{exp.company}</span>
              <span>{exp.location}</span>
              {exp.date && <span>{exp.date}</span>}
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
