import profile from "@repo/data/profile";
import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-white font-mono">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm italic leading-relaxed text-white">
            "The journey of a thousand miles begins with a single step."
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gray-800" />

          <div className="mt-16 space-y-6 text-xs leading-relaxed text-gray-100">
            <p>
              I've always believed that our stories define us — not just the
              highlights that we share on social media, but the quiet moments of
              doubt, the unexpected detours, and the small victories that often
              go uncelebrated. This is my attempt to share those moments, to
              reflect on the path that has led me here, and perhaps to find
              meaning in the journey itself.
            </p>
            <p>
              What follows isn't a polished narrative with a clear beginning,
              middle, and end. It's messy, sometimes contradictory, and
              perpetually unfinished — much like life itself. But in sharing
              these fragments of my experience, I hope to connect with others
              who might see reflections of their own journey in mine.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: Beginnings */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 01
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">Beginnings</h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  I grew up in a small coastal town where the rhythm of the
                  waves was as familiar as my own heartbeat. My earliest
                  memories are tinged with the scent of salt water and the
                  feeling of sand between my toes. It was an idyllic childhood
                  in many ways — the kind that forms a foundation of security
                  and wonder that stays with you long after you've left home.
                </p>
                <p>
                  My parents were both educators, and our home was filled with
                  books. I would lose myself for hours in stories of far-off
                  places and extraordinary people. Perhaps it was inevitable
                  that I would develop a fascination with storytelling and
                  communication. While other kids dreamed of becoming astronauts
                  or firefighters, I harbored secret ambitions of becoming a
                  writer, capturing moments and emotions in words that could
                  transport others just as I had been transported.
                </p>
                <p>
                  School came easily to me, but social connections were more
                  challenging. I was the quiet kid who preferred the library to
                  the playground, who found more comfort in ideas than in the
                  chaotic energy of my peers. This sense of being slightly out
                  of step with others would follow me into adolescence, both a
                  source of insecurity and a catalyst for developing a rich
                  inner life.
                </p>
                <p>
                  It was during these formative years that I discovered
                  computers — not just as tools for games or homework, but as
                  portals to new worlds of creativity and connection. The first
                  time I wrote a simple program and watched it execute exactly
                  as I had instructed, I felt a thrill of creation that was
                  almost magical. Here was a medium where precision and
                  imagination could coexist, where logical thinking and creative
                  expression weren't at odds but were two sides of the same
                  coin.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="placeholder.svg"
                  alt="Childhood"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs text-gray-900">
                      Coastal Town, Pacific Northwest
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">1990 — 2003</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Key Memory
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "The first time I wrote code and watched it execute, I
                      felt like I had discovered magic."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Turning Point */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 02
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">
            The Turning Point
          </h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  College was both a liberation and a challenge. Suddenly, I was
                  surrounded by people who shared my interests and ambitions.
                  The computer science department became my second home, and I
                  found myself part of a community of like-minded individuals
                  for the first time. There was an intoxicating energy in those
                  late-night coding sessions, in the collaborative
                  problem-solving and the shared excitement of building
                  something new.
                </p>
                <p>
                  But it was also during this time that I faced my first
                  significant failure. I had applied for a prestigious
                  internship at a leading tech company, convinced that my
                  academic performance and passion would be enough to secure the
                  position. The rejection letter arrived on a rainy Tuesday, and
                  I remember staring at it for a long time, feeling a mixture of
                  disappointment and disbelief. It was the first time I had
                  wanted something so badly and not achieved it, and the
                  experience shook my confidence in a way I hadn't anticipated.
                </p>
                <p>
                  Looking back, that rejection was one of the most valuable
                  experiences of my college years. It forced me to reevaluate my
                  approach, to recognize that technical skills alone weren't
                  enough in a field that increasingly valued collaboration and
                  communication. I sought out opportunities to work on
                  interdisciplinary projects, to translate complex technical
                  concepts for non-technical audiences, and to develop the soft
                  skills that would complement my programming abilities.
                </p>
                <p>
                  The following year, I secured an internship at a smaller but
                  innovative company working on accessibility technologies. It
                  wasn't the prestigious name I had initially coveted, but the
                  work was meaningful in a way I hadn't expected. I was part of
                  a team developing tools that would make digital experiences
                  more accessible to people with disabilities, and for the first
                  time, I saw how technology could be a force for inclusion and
                  empowerment.
                </p>
                <p>
                  This experience marked a turning point in how I thought about
                  my career and my purpose. Success wasn't just about technical
                  achievement or recognition; it was about impact and
                  contribution. This realization would guide my choices in the
                  years to come, leading me down paths I couldn't have
                  anticipated but that would ultimately prove more fulfilling
                  than the straightforward trajectory I had once envisioned.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="placeholder.svg"
                  alt="College Years"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs text-gray-900">
                      University Campus, East Coast
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">2003 — 2007</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Lesson Learned
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "Failure isn't a detour from the path; sometimes it is the
                      path, leading you to where you need to be."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Leap */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 03
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">The Leap</h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  After graduation, I followed the expected path, accepting a
                  position at a well-established tech company. The job offered
                  stability, good compensation, and the validation of working
                  for a recognized name in the industry. For the first few
                  years, I was content, learning from experienced colleagues and
                  gradually taking on more responsibility. But as time passed, I
                  began to feel a growing sense of restlessness.
                </p>
                <p>
                  The projects I worked on were technically challenging but
                  often felt disconnected from any meaningful impact. I found
                  myself in meetings discussing feature optimizations that would
                  increase engagement by fractions of a percentage point, and I
                  couldn't help wondering if this was really the best use of my
                  skills and time. The accessibility work I had done during my
                  internship had shown me a different kind of satisfaction, one
                  that came from knowing my work was making a tangible
                  difference in people's lives.
                </p>
                <p>
                  This period of professional disillusionment coincided with
                  personal changes. I had moved to a new city for the job, far
                  from family and old friends, and was struggling to build a
                  community. The long hours at work left little time for
                  connection or exploration. I found myself in a routine that
                  was comfortable but uninspiring, both professionally and
                  personally.
                </p>
                <p>
                  The decision to leave wasn't made in a moment of dramatic
                  revelation but through a gradual accumulation of small
                  dissatisfactions and unfulfilled aspirations. When I finally
                  submitted my resignation, it felt less like a leap into the
                  unknown and more like a step toward authenticity. I had saved
                  enough to give myself six months to explore other options, to
                  reconnect with the sense of purpose I had found during that
                  formative internship.
                </p>
                <p>
                  Those six months turned into a year of exploration and
                  reinvention. I freelanced on projects that aligned with my
                  values, volunteered my technical skills for non-profit
                  organizations, and even spent three months traveling,
                  experiencing different cultures and perspectives. It was a
                  period of both freedom and uncertainty, of financial anxiety
                  balanced by a growing sense of alignment between my work and
                  my values.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="placeholder.svg"
                  alt="Career Transition"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs text-gray-900">
                      San Francisco, CA
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">2007 — 2012</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Reflection
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "Sometimes the most courageous act is to walk away from
                      what's comfortable to pursue what's meaningful."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Finding Purpose */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 04
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">
            Finding Purpose
          </h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  The path back to stability wasn't linear. After my year of
                  exploration, I joined a small startup focused on educational
                  technology. The company's mission — to make quality education
                  more accessible through technology — resonated deeply with me,
                  and I was excited by the opportunity to help build something
                  from the ground up.
                </p>
                <p>
                  The reality of startup life was both more challenging and more
                  rewarding than I had anticipated. The hours were long, the
                  resources limited, and the pressure to deliver was constant.
                  But there was also an energy and purpose that had been missing
                  in my previous role. Every feature we shipped had a direct
                  impact on teachers and students, and the feedback loop was
                  immediate and gratifying.
                </p>
                <p>
                  It was during this time that I also began to find my voice as
                  a leader. As one of the more experienced developers on a young
                  team, I found myself naturally taking on mentoring
                  responsibilities. I discovered that I enjoyed helping others
                  grow, sharing knowledge, and creating an environment where
                  everyone felt empowered to contribute. This aspect of the work
                  — the human element of collaboration and development — became
                  as fulfilling as the technical challenges.
                </p>
                <p>
                  The startup journey was not without its setbacks. We faced
                  funding challenges, had to pivot our product strategy more
                  than once, and there were moments when the future of the
                  company seemed uncertain. But these challenges fostered a
                  resilience and adaptability that would serve me well in the
                  years to come.
                </p>
                <p>
                  After three intense years, the company was acquired by a
                  larger educational platform. The acquisition was a validation
                  of our work and vision, but it also marked the end of a
                  chapter. I stayed through the transition period, helping to
                  integrate our technology and team, but I knew that the unique
                  culture and mission-driven focus of our small startup would
                  inevitably change within the larger corporate structure.
                </p>
                <p>
                  As I contemplated my next move, I reflected on what had made
                  this experience so fulfilling despite its challenges: the
                  alignment between my work and my values, the opportunity to
                  mentor and lead, and the tangible impact of our product on
                  users' lives. These would become my criteria for evaluating
                  future opportunities, a compass pointing toward purpose rather
                  than just advancement or security.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="placeholder.svg"
                  alt="Startup Life"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs text-gray-900">Boston, MA</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">2012 — 2015</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Key Insight
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "Purpose isn't found in grand missions alone, but in the
                      daily practice of aligning your work with your values."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Present Day */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 05
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">Present Day</h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  Today, I find myself in a place I couldn't have predicted when
                  I started this journey. After the acquisition, I took time to
                  carefully consider my next steps. I had offers from
                  established companies that would have provided security and
                  advancement, but I kept returning to the criteria I had
                  established: purpose, impact, and the opportunity to grow not
                  just as a technologist but as a leader.
                </p>
                <p>
                  This led me to my current role, working with a non-profit
                  organization that uses technology to address social and
                  environmental challenges. My position combines technical
                  leadership with program development, allowing me to leverage
                  both my engineering skills and my passion for mentoring. I
                  work with a diverse team of technologists, activists, and
                  educators, all united by a commitment to using our skills for
                  positive change.
                </p>
                <p>
                  The work is challenging in new ways. We operate with limited
                  resources, navigate complex stakeholder relationships, and
                  tackle problems that don't have easy technical solutions. But
                  there's a depth of satisfaction in this work that I haven't
                  found elsewhere — a sense that my professional skills are
                  serving my personal values rather than the two existing in
                  separate spheres.
                </p>
                <p>
                  Outside of work, I've found a community that nourishes me.
                  I've put down roots in a city I love, built friendships that
                  sustain me through challenges, and even found time to
                  reconnect with old passions like writing and photography. The
                  balance I sought for so long between professional fulfillment
                  and personal well-being feels more attainable now, though it
                  remains a practice rather than an achievement.
                </p>
                <p>
                  Looking back on the path that led me here — the coastal
                  childhood, the academic achievements and disappointments, the
                  corporate job that looked right on paper but felt wrong in
                  practice, the startup rollercoaster, and now this purposeful
                  work — I see not a linear progression but a series of
                  explorations, each teaching me something essential about what
                  matters to me and how I want to contribute to the world.
                </p>
                <p>
                  I don't know what the next chapter holds, and I've learned to
                  be comfortable with that uncertainty. What I do know is that
                  the journey itself — with all its detours, challenges, and
                  unexpected discoveries — has been as valuable as any
                  destination. And I'm grateful for every step of it, even the
                  difficult ones, that have led me to where I am today.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="placeholder.svg"
                  alt="Present Day"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs text-gray-900">New York, NY</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">2015 — Present</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Philosophy
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "The journey is not about finding your one true purpose,
                      but about creating a life that allows you to express your
                      many purposes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epilogue */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Epilogue
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">
            Continuing the Journey
          </h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 space-y-6 text-xs leading-relaxed text-gray-800">
            <p>
              As I write this, I'm aware that this story is far from complete.
              There are chapters yet to be written, experiences yet to be had,
              lessons yet to be learned. That's the beauty of a life story —
              it's always unfolding, always revealing new possibilities and
              perspectives.
            </p>
            <p>
              If there's one thread that runs through my journey so far, it's
              the search for meaning and connection — in work, in relationships,
              in the way I engage with the world. This search hasn't always been
              straightforward, and there have been times when I've felt lost or
              uncertain. But each step, even the missteps, has brought me closer
              to understanding what truly matters to me.
            </p>
            <p>
              I share this story not because it's extraordinary, but because
              it's human. We all navigate our own paths, make our own choices,
              face our own challenges. In sharing our stories, we create
              possibilities for connection and recognition — moments where
              someone else might see their own experience reflected and feel
              less alone in their journey.
            </p>
            <p>
              So this isn't an ending, but a pause — a moment of reflection
              before the story continues. I'm grateful for the path that has led
              me here, and curious about where it will lead next. Whatever
              comes, I hope to approach it with the same openness to growth and
              change that has guided me so far.
            </p>
            <p>
              Thank you for walking this part of the journey with me. I hope
              that in some small way, my story has resonated with yours.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center text-xs text-gray-900"
            >
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-gray-900">
                Connect with me
              </span>
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-gray-500">
        <p>{profile.copyright}</p>
      </footer>
    </div>
  );
}
