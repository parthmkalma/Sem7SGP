import React from "react";
import Navbar from "../Component/Navbar";
const teamMembers = [
  {
    name: "Parth Kalma",
    role: "Frontend Wizard",
    quote: "Turning coffee into code and dreams into pixels.",
    funFact: 
      "Can debug CSS with his eyes closed—it's practically a superpower. Styling issues don’t stand a chance!",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "UI/UX Design"],
    currentProject: "Learning Creative Frontend using framer motion and GSAP",
    email: "parthmkalma@gmail.com",
  },
  {
    name: "Ashish Khatwani",
    role: "Backend Sorcerer",
    quote: "If it's not scalable, it's not acceptable.",
    funFact:
      "Once optimized a database query so well, it returned results before being asked.",
    skills: ["Node.js", "Express", "MongoDB", "API Design"],
    currentProject: "Developing a real-time data processing pipeline",
    email: "21it066@charusat.edu.in",
  },
];

function TeamMember({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
      <div className="md:flex">
       
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {member.role}
          </div>
          <h2 className="mt-2 text-xl leading-tight font-bold text-gray-900">
            {member.name}
          </h2>
          <p className="mt-2 text-gray-600 italic">"{member.quote}"</p>
          <p className="mt-4 text-gray-500">Fun Fact: {member.funFact}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Superpowers</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            <span className="font-semibold">Current Mission:</span>{" "}
            {member.currentProject}
          </p>
          <div className="mt-4">
            <a
              href={`mailto:${member.email}`}
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            >
              Shoot a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About Our<span className="text-indigo-600"> Team</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The wizards behind the curtain, turning caffeine into code and
              ideas into reality.
            </p>
          </div>

          <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
