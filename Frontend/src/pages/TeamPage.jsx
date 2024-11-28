import React from "react";
import Navbar from "../Component/Navbar";

const teamMembers = [
  {
    name: "Parth Kalma",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Parth is a skilled frontend developer with expertise in creating responsive and user-friendly web applications. He specializes in modern web technologies and focuses on delivering seamless user experiences.",
    background:
      "Parth has a strong background in Computer Science and has worked on various web development projects. He is passionate about creating intuitive user interfaces and ensuring optimal performance of web applications.",
    skills: [
      "React.js",
      "HTML5, CSS3, Tailwind CSS",
      "JavaScript (ES6+)",
      "Responsive Web Design",
      "Version Control (Git)",
    ],
    hobbies:
      "When not coding, Parth enjoys playing guitar, experimenting with new cooking recipes, and participating in local tech meetups to stay updated with the latest frontend trends.",
    email: "parthmkalma@gmail.com",
  },
  {
    name: "Ashish Khatwani",
    role: "Backend Developer",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Ashish is a proficient backend developer specializing in building robust and scalable server-side applications. He excels in creating efficient APIs and managing complex database structures.",
    background:
      "With a degree in Software Engineering, Ashish has extensive experience in developing backend systems for various industries. He is known for his problem-solving skills and ability to optimize application performance.",
    skills: [
      "Node.js, Express.js",
      "Database Management (SQL, NoSQL)",
      "RESTful API Design",
      "Server Management and Deployment",
      "Security and Authentication",
    ],
    hobbies:
      "Outside of work, Ashish is an avid reader of technology blogs, enjoys solving complex puzzles, and likes to contribute to open-source projects in his free time.",
    email: "ashish.khatwani@example.com",
  },
];

function TeamMember({ member }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        {member.name}
      </h2>
      <p className="text-center text-gray-600 mb-4">{member.role}</p>

      <p className="text-gray-700 text-sm mb-6 leading-relaxed">
        {member.description}
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Background</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{member.background}</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Skills & Technologies
      </h3>
      <ul className="list-disc ml-6 mb-6">
        {member.skills.map((skill, index) => (
          <li key={index} className="text-gray-600 mb-1">
            {skill}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Hobbies & Interests
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{member.hobbies}</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
      <p className="text-gray-600 mb-4">
        You can reach {member.name.split(" ")[0]} at:{" "}
        <a
          href={`mailto:${member.email}`}
          className="text-blue-600 hover:underline transition-colors duration-200"
        >
          {member.email}
        </a>
      </p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate-fade-in-down">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
