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
                  I grew up in a city located near China. My earliest memories
                  are of long summer days spent exploring the nature since I
                  live in a remote region of the city. It is also where I
                  learned to appreciate the beauty of simplicity and the power
                  of imagination. I would spend hours wandering the woods,
                  creating elaborate stories in my mind.
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
                  src="/images/young_me.JPG"
                  alt="Kid Zai"
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
                      Lashio, Shan State
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Period
                    </p>
                    <p className="mt-1 text-xs text-gray-900">2003 — 2010</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Key Memory
                    </p>
                    <p className="mt-1 text-xs italic text-gray-900">
                      "The first moment when i realized that I am a human being
                      and not a dog."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Gifted Child */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 02
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">
            The Gifted Child
          </h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  I spent most of my high school years as a gifted kid, a label
                  that came with both privileges and pressures because of my
                  parents. I never got a chance to play football with my friends
                  because I'm being isolated physically and mentally. After
                  school, I always had to go for another class for Chinese and
                  English. I was the only one who had this life. On the one
                  hand, I was fortunate to have access to resources and
                  opportunities which made me who I am today.
                </p>
                <p>
                  It didn't end there. For my senior high school, I had to go to
                  a special school dedicated for the engineers. The reason was
                  quite funny. I was scared of not being a Civil Engineer if I
                  go through normal route which is completely normal. I chose to
                  attend GTHS which is focused on engineering and by doing that,
                  I will not miss the chance of becoming a Civil Engineer. It
                  started beautifully with me being the top student in the
                  entrance exam which got me into the top class.
                </p>
                <p>
                  I killed everyone's expectations by living like a complete
                  idiot. There's something that i forgot to mention which is
                  about my parents. They are both teachers in the university and
                  the teachers who're teaching in that high school were once
                  their students. For that reason, I was the king and I made a
                  lot of bad things. I bullied some of the poor kids in that
                  school (not physically but I still regret for that). I started
                  smoking and I got all the bad habits that my parents hated.
                </p>
                <p>
                  But it ended well with me meeting good friends and teacher who
                  fixed me at the final year. I was being pressured in the final
                  exam cuz the situation is so bad that I got C in my first
                  semester's test. I was so surprised when i hear that I passed
                  with good marks after the exam. Then here comes the life
                  changing moments of my life.
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
                    <p className="mt-1 text-xs text-gray-900">2010 — 2019</p>
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
          <h2 className="mt-2 text-2xl font-normal text-black">
            The Calm Before the Storm
          </h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  I started my University life in Mandalay which is the second
                  biggest city in my country. I got the freedom that I always
                  wanted. The first week was a little lonely but I made a lot of
                  interesting friends after a week. Guess what? I ended up being
                  gamer, smoker and alcoholics because of them. But they were
                  still good people.
                </p>
                <p>
                  It was the happiest moment of my life til this day. I was
                  drunk almost every night and I didn't even study a bit. I went
                  to short trips that I never thought I would go. I made that
                  decision in just 1 minute thanks to the friends that I had. I
                  had my first breakup at that time which is also a story itself
                  but long story short, I was dumb and she's smart so I just
                  ended up crying like a bitch.
                </p>
                <p></p>
                <p>
                  The calm is over, the exam was postponed because of COVID and
                  we didn't know what's waiting for us. I came home and
                  believing that we'll all meet again when the COVID is over.
                  (Spoiler Alert: it didn't) I had to stop my bad habits at home
                  because I will get killed if my parents know how I live in
                  Mandalay. I still had connections with my friends from Uni via
                  game around that time.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="/images/naked_drunk.png"
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
                    <p className="mt-1 text-xs text-gray-900">2019 — 2020</p>
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
                  I got hit by a storm after storm. First, my girlfriend left
                  because I was a bad boy it took me almost 3 months to recover.
                  The pain from that breakup ended after I met with a new girl.
                  She played an important role for my life. A bigger storm hit
                  at February 1, 2021 when the military coup happened. I didn't
                  know it would be that bad. I was so naive that I thought it
                  would be over in a month or two.
                </p>
                <p>
                  I was lucky to have her because she was the one who kept me
                  sane for the whole year. But I was still a coward and a loser.
                  She was so rich and I was so poor that I couldn't even afford
                  expensive gifts. I was so ashamed of myself that I didn't even
                  want to continue the relationship. I was so scared of losing
                  her that I chose to break up with her. I was so stupid and I
                  regretted it after a year.
                </p>
                <p>
                  I didn't have a dream but I knew I needed to become stronger.
                  I had that fire within me so I started studying Japanese with
                  a plan to study in Japan. I was so focused on studying that I
                  passed the exam within a short period of time. That
                  certificate became useless when I realized that I couldn't
                  afford to study in Japan. I learnt the most important lesson
                  after passing the exam. I can become everything that I want to
                  if I put my heart and effort into it.
                </p>
                <p>
                  I was lost for a while after that. But I ended up working at
                  my dad's student's office working as a drafter. I was still
                  better than 99% of the graduates in my country when it comes
                  to Civil Engineering related stuffs thanks to my dad. I was
                  still a dickhead til that day. I was slacking off and which
                  ended up firing me after a couple of months. But I found the
                  type of person that I want to be.
                </p>
                <p>
                  I want to be the next Steve Jobs. You heard that right. That
                  became my dream and I started to learn programming. I was also
                  late and my parents thought I was crazy. They invested a lot
                  of time and effort into me. I had a bright future within that
                  Civil Engineering career. I have no doubt that I would be a
                  top tier engineer in my country if I continued that path. I
                  was so lucky to have these parents that I didn't get slapped
                  in the face.
                </p>
                <p>
                  After opposing my parents, the real shit happens. It was a
                  time when everything I did was failing. The electricity, the
                  internet, everything was against me. I wasn't good enough to
                  get a job. I failed the job interviews over and over. And for
                  worse, the girl that i mentioned chose someone how's richer
                  and more mature over me. It sounds silly when I look back but
                  at that time, it was a big deal. I was nothing, just an
                  arrogant loser who's filled with failures. I failed at
                  education, I chose something that my parents were against and
                  now I hit what people called the rock bottom.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="/images/last_peaceful_night.jpg"
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
                    <p className="mt-1 text-xs text-gray-900">2020 — 2022</p>
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
          <h2 className="mt-2 text-2xl font-normal text-black">Viva la vida</h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p>
                  I spent my darkest hours in a dark small room, hunched over my
                  8 years old laptop and grind. Failure after failure, I found
                  another failure that lead me to change my life. I failed at a
                  job interview, and I posted on reddit that I was willing to
                  work on a project for free just to get experience. And
                  thankfully, a guy from Australia messaged me. (While looking
                  back, I always feel like everything happened as if it is god's
                  plan.)
                </p>
                <p>
                  His name is Nick and we're at the same age. He wants to build
                  an AI that can redraw floor plans. As someone who learnt for
                  his entire life drawing floor plans, it was an offer that I
                  couldn't deny even though I had nothing and paid nothing. We
                  worked like crazy, we talked and discuss for hours and hours
                  believing we can build the next Apple. It was 'Archaic' and
                  we're now 21 years old first time startup founders. Another
                  life changing event happened after a month.
                </p>
                <p>
                  From broke and now became a refugee. The civil war is now
                  close to our city. I was hearing explosions, airstrikes almost
                  every night while I was coding that damn website. That was the
                  proudest thing that I did. Later, the battles became so close
                  that I was seeing a helicopter shooting rebals and the rebals
                  shooting back that damn helicopter in broad daylight without
                  telescope. That lead us to move into the city center
                  immediately.
                </p>
                <p>
                  It was a cold night, we didn't bring any blankets. I also had
                  exam from UoPeople that night, and I was also making landing
                  page for my website. Do you know how a refugee camp looks like
                  in my country. It was so crowded, the kids are crying, since
                  it's a hall, it's so noisy and the only time everyone stop
                  making noise is when kaboom. I should be scared and depressed
                  but I wasn't. I've changed and I've grown.
                </p>
                <p>
                  Luckily, since my parents were teachers, one of their student
                  invited us to live in their house with us. Since they're rich,
                  they got plenty of spaces to share. And now I can sleep in
                  peace except from the explosions. We shipped our website when
                  I was still in that house and guess what, we had zero users.
                  The problem was simple, we were late. Our core feature was to
                  generate property descriptions and openai released their GPT
                  stores so why would they pay us to generate the same thing.
                  (We had more interesting features like google map integration
                  but no one really cared.)
                </p>
                <p>
                  It was another failure but unlike my previous ones, I was
                  proud. After a few months living in that house, we made a plan
                  to leave the city because we knew it will get closer again. We
                  took debt and we plan to move to a peaceful city. While
                  planning, another storms hits. Junta made a law that everyone
                  at my age will have to serve the military. But since it won't
                  affect immediately, we took the risk and moved. I started a
                  new life there for some reason, I was listening "viva la vida"
                  from coldpay on the car and I can never forget that.
                </p>
                <p>
                  I still worked on my startup for a few months and later we
                  both took a break peacefully accepting that we were
                  inexperienced. I got nothing to do except from working on my
                  own projects. I was still making mistakes but these are not
                  stupid mistakes anymore. Tbh I was lost around that time. I
                  didn't know what's waiting for me and I didn't know what to
                  do. I posted stuffs on reddit asking help for my country's
                  situation and met a guy named hamburger_spaceship. That dude
                  turns out to be a girl. And thanks to her, I got a job at
                  "carching" which is a Malaysian startup but this time, I got
                  paid around 160 USD. Then another chapter begins.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <Image
                  src="/images/refugee.png"
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
                    <p className="mt-1 text-xs text-gray-900">2022 — 2024</p>
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

      <section className="bg-[#f9f9f9] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Chapter 06
          </p>
          <h2 className="mt-2 text-2xl font-normal text-black">Present day</h2>
          <div className="mt-4 h-px w-16 bg-gray-200" />

          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="space-y-6 text-xs leading-relaxed text-gray-800">
                <p></p>
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
