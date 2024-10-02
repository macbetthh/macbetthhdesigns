import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10 w-full">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mb-4 w-4/5">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <div className="flex items-center justify-between mt-6">
          <div className="flex-1 pr-4">
            <p className="text-lg">
              I’m Beth McKinney, a junior high Computer Science teacher diving into the world of web development. Teaching young minds about technology has been my passion, and now I’m excited to explore coding and programming further. Shifting gears from the classroom to coding, I’m eager to expand my skills and become a proficient web developer.
            </p>
          </div>
          <img
            src="BMheadshot.jpg" 
            alt="Beth McKinney"
            className="w-56 h-64 rounded-[35%] border-4 border-pink-300 shadow-lg ml-4" 
          />
        </div>
      </div>

      {/* Timeline and Skills Section */}
      <div className="max-w-4xl mx-auto flex justify-between p-6 w-4/5">
        
        {/* Timeline Section */}
        <div className="w-1/2 pr-4">
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="mt-4 border-l-2 border-gray-300 pl-6">
            {[
              { year: "'24", position: "Junior Web Developer", company: "Your Company", details: "Working on various projects." },
              { year: "'23", position: "Teacher", company: "Local School", details: "Teaching Computer Science." },
            ].map((exp, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center -left-12">
                  {exp.year}
                </div>
                <div>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section with Progress Bars */}
        <div className="w-1/2 pl-4">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="mt-4 space-y-4">
            {[
              { skill: "HTML", level: "90%" },
              { skill: "CSS", level: "80%" },
              { skill: "JavaScript", level: "85%" },
              { skill: "React", level: "75%" },
              { skill: "Node.js", level: "70%" },
              { skill: "MongoDB", level: "65%" }
            ].map((skillItem, index) => (
              <div key={index}>
                <p className="font-semibold">{skillItem.skill}</p>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-purple-600 h-4 rounded-full"
                    style={{ width: skillItem.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
