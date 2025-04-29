import Image from "next/image";
import Link from "next/link";
import profile from "@repo/data/profile";
import works from "@repo/data/profile/works";
import education from "@repo/data/profile/education";
import projects from "@repo/data/profile/projects";
import { Button } from "@repo/ui/components/ui/button";
import React from "react";

export default function HistoryPage() {
  return (
    <div className="relative min-h-screen bg-white font-mono">
      {/* Bio Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              01 / About Me
            </p>
            <div className="mt-2 h-px w-16 bg-gray-200" />

            <div className="mt-16 grid gap-16 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-normal text-black">My Story</h2>
                <p className="mt-6 text-xs leading-relaxed text-gray-600">
                  My journey into technology started with curiosity and a dream.
                  Growing up in Myanmar, I was always drawn to how things
                  work—especially in the digital world. I built my first app as
                  a teenager, and since then, I've been passionate about
                  creating software that makes life simpler, smarter, and more
                  connected.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-gray-600">
                  After completing my Computer Science degree , I am now
                  planning to pursue a master's degree. During my studies, I
                  explored a wide range of tools and frameworks—from Ruby on
                  Rails and React and Flutter to AI technologies. Alongside my
                  academic work, I led and contributed to projects that aim to
                  solve real problems.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-gray-600">
                  I believe we can make the world a better place through
                  technology and innovation. From building great products to
                  creating solutions that address global challenges like world
                  hunger and peace, I aspire to contribute meaningfully one day.
                  I am excited to connect with like-minded individuals and
                  organizations that share my vision of leveraging technology
                  for the greater good.
                </p>

                <div className={"mt-5 "}>
                  <Link href={"/story"}>
                    <Button className="group h-10 border border-black bg-black px-6 text-[10px] font-normal uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black">
                      Know more
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <Image
                  src="https://5dtle1ixev.ufs.sh/f/NVoH0HnelgtLFSA1ZSnozrHKMLJ42PFAc6tv0IOwpglBkWq1"
                  alt="Sai Ye Yint Aung"
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="mt-6 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-2 text-xs text-gray-900">
                      {profile.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Experience
                    </p>
                    <p className="mt-2 text-xs text-gray-900">
                      {profile.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Email
                    </p>
                    <p className="mt-2 text-xs text-gray-900">
                      {profile.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Availability
                    </p>
                    <p className="mt-2 text-xs text-gray-900">
                      Open to Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              02 / Experience
            </p>
            <div className="mt-2 h-px w-16 bg-gray-200" />
            <h2 className="mt-16 text-xl font-normal text-black">
              Professional Journey
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            {works.map((experience, index) => (
              <div key={index} className="group border-t border-gray-200 py-12">
                <div className="flex flex-col md:flex-row md:items-baseline">
                  <p className="text-xs text-gray-400 md:w-1/4">
                    {experience.start} - {experience.end}
                  </p>
                  <div className="mt-4 md:mt-0 md:w-3/4">
                    <h3 className="text-sm font-normal text-black">
                      {experience.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {experience.company}
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-gray-600">
                      {experience.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Key Projects
                      </p>
                      <ul className="mt-2 space-y-2">
                        {experience.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="flex items-start">
                            <span className="mr-2 text-xs">—</span>
                            <span className="text-xs text-gray-600">
                              {project}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              03 / Education
            </p>
            <div className="mt-2 h-px w-16 bg-gray-200" />
            <h2 className="mt-16 text-xl font-normal text-black">
              Academic Background
            </h2>

            <div className="mt-16 space-y-12">
              {education.map((education, index) => (
                <div
                  key={index}
                  className="group border-t border-gray-200 py-12"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline">
                    <p className="text-xs text-gray-400 md:w-1/4">
                      {education.start} - {education.end}
                    </p>
                    <div className="mt-4 md:mt-0 md:w-3/4">
                      <h3 className="text-sm font-normal text-black">
                        {education.degree}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {education.school}
                      </p>
                      <p className="mt-4 text-xs leading-relaxed text-gray-600">
                        {education.description}
                      </p>

                      <div className="mt-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                          Key Courses
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {education.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              04 / Skills
            </p>
            <div className="mt-2 h-px w-16 bg-gray-200" />
            <h2 className="mt-16 text-xl font-normal text-black">
              Technical Expertise
            </h2>

            <div className="mt-16 grid gap-16 md:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Development
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      category: "Languages",
                      skills: [
                        "JavaScript (ES6+)",
                        "TypeScript",
                        "HTML5",
                        "CSS3/SASS",
                        "SQL",
                        "Python",
                      ],
                    },
                    {
                      category: "Frameworks & Libraries",
                      skills: [
                        "React",
                        "Next.js",
                        "Vue.js",
                        "Tailwind CSS",
                        "Node.js",
                        "Express",
                      ],
                    },
                    {
                      category: "Tools & Platforms",
                      skills: [
                        "Git",
                        "Webpack",
                        "Docker",
                        "AWS",
                        "Vercel",
                        "Netlify",
                        "GitHub Actions",
                      ],
                    },
                  ].map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-normal text-black">
                        {skillGroup.category}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Design
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      category: "Design Tools",
                      skills: [
                        "Figma",
                        "Adobe XD",
                        "Photoshop",
                        "Illustrator",
                        "Sketch",
                        "InVision",
                      ],
                    },
                    {
                      category: "Methodologies",
                      skills: [
                        "Responsive Design",
                        "Mobile-First",
                        "Atomic Design",
                        "Design Systems",
                        "Accessibility (WCAG)",
                      ],
                    },
                    {
                      category: "Specialties",
                      skills: [
                        "UI Design",
                        "Interaction Design",
                        "Typography",
                        "Color Theory",
                        "Minimalist Design",
                      ],
                    },
                  ].map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-normal text-black">
                        {skillGroup.category}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              05 / Projects
            </p>
            <div className="mt-2 h-px w-16 bg-gray-200" />
            <h2 className="mt-16 text-xl font-normal text-black">
              Selected Work
            </h2>

            <div className="mt-16 grid gap-16 md:grid-cols-2 ">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-sm font-normal text-black">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              06 / Testimonials
            </p>
            <div className="mt-2 h-px w-16 bg-gray-800" />
            <h2 className="mt-16 text-xl font-normal">Client Feedback</h2>

            <div className="mt-16 space-y-16">
              {/*TODO: Ask people for testimonials and add from testimonials.ts*/}
              {[
                {
                  quote:
                    "Alex transformed our vision into a digital reality that exceeded our expectations. The attention to detail and technical expertise were evident throughout the project.",
                  author: "Sarah Johnson",
                  role: "Creative Director, Studio Visage",
                },
                {
                  quote:
                    "Working with Alex was a seamless experience. They understood our needs perfectly and delivered a website that perfectly captures our brand while providing an exceptional user experience.",
                  author: "Michael Chen",
                  role: "Founder, Horizon Ventures",
                },
                {
                  quote:
                    "The redesign of our e-commerce platform led to a significant increase in conversions and customer satisfaction. Alex's approach to minimalist design and intuitive user experience made all the difference.",
                  author: "Emma Rodriguez",
                  role: "Head of Digital, Lumen Fashion",
                },
              ].map((testimonial, index) => (
                <div key={index} className="border-t border-gray-800 pt-8">
                  <p className="text-sm font-light italic leading-relaxed text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-white">{testimonial.author}</p>
                    <p className="text-[10px] text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              07 / Contact
            </p>
            <div className="mx-auto mt-2 h-px w-16 bg-gray-200" />
            <h2 className="mt-16 text-xl font-normal text-black">
              Let's Work Together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-gray-600">
              I'm currently available for freelance projects, collaborations,
              and consulting opportunities. If you have a project in mind or
              just want to connect, I'd love to hear from you.
            </p>

            <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Email
                </p>
                <p className="mt-2 text-xs text-gray-900">{profile.email}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Social
                </p>
                <div className="mt-2 flex space-x-4">
                  <Link
                    href={profile.urls.x}
                    className="text-xs text-gray-900 hover:underline"
                  >
                    Twitter
                  </Link>
                  <Link
                    href={profile.urls.linkedIn}
                    className="text-xs text-gray-900 hover:underline"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href={profile.urls.github}
                    className="text-xs text-gray-900 hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Location
                </p>
                <p className="mt-2 text-xs text-gray-900">
                  {profile.location}
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center border border-black bg-black px-6 text-[10px] font-normal uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
              >
                Get in Touch
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-gray-500">
        <p>{profile.copyright}</p>
      </footer>
    </div>
  );
}
