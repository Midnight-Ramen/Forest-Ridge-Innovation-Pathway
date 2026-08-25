'use client';

import { useMemo, useState } from 'react';

const stages = [
  {
    grade: '5',
    verb: 'Make',
    identity: 'Maker & Coder',
    course: 'Digital Makers & Creative Coders',
    question: 'How can I use code to make something interactive?',
    summary:
      'Students create with code, micro:bit inputs and outputs, simple prototypes, and early computational thinking.',
    skills: ['Events', 'Loops', 'micro:bit', 'Prototype', 'Test'],
    capstone: 'Smart Creation using micro:bit',
  },
  {
    grade: '6',
    verb: 'Compute',
    identity: 'Computational Thinker & AI Explorer',
    course: 'LEGO CS + AI',
    question: 'How can computers use information to make decisions?',
    summary:
      'Students investigate data, algorithms, computational models, introductory AI, and computer vision through LEGO systems.',
    skills: ['Data', 'Models', 'AI literacy', 'Computer vision', 'Algorithms'],
    capstone: 'CS + AI Challenge',
  },
  {
    grade: '7',
    verb: 'Engineer',
    identity: 'Robotics Engineer',
    course: 'Robo Design Studio',
    question: 'How can I engineer a robot to accomplish a task?',
    summary:
      'Students design mechanisms, program autonomous behaviors, use sensors and motors, and optimize robotic systems.',
    skills: ['Sensors', 'Motors', 'Autonomy', 'Mechanisms', 'Optimization'],
    capstone: 'Autonomous Robotics Challenge',
  },
  {
    grade: '8',
    verb: 'Integrate',
    identity: 'Creative Technologist & Systems Designer',
    course: 'Interactive Systems',
    question:
      'How can I design an interactive system that responds meaningfully to people or its environment?',
    summary:
      'Students combine code, electronics, mechanisms, sensors, outputs, and human-centered design into complete systems.',
    skills: ['Systems', 'Servos', 'User testing', 'Diagrams', 'Iteration'],
    capstone: 'Interactive Systems Design Challenge',
  },
  {
    grade: '9-10',
    verb: 'Explore',
    identity: 'Technology Explorer & Builder',
    course: 'Upper School X Blocks',
    question: 'What can I do with these skills?',
    summary:
      'Students apply foundations across robotics, automation, design, immersive media, AI, and emerging technologies.',
    skills: ['Choice', 'Build', 'Collaborate', 'Troubleshoot', 'Document'],
    capstone: 'Portfolio-ready demonstrations',
  },
  {
    grade: '11-12',
    verb: 'Specialize',
    identity: 'Innovator, Specialist & Leader',
    course: 'Advanced X Blocks + independent design',
    question: 'Which technologies do I want to explore deeply?',
    summary:
      'Students select areas of interest, solve authentic problems, document increasingly sophisticated systems, and lead others.',
    skills: ['Specialize', 'Mentor', 'Ethics', 'Capstone', 'Lead'],
    capstone: 'Student-directed innovation and leadership',
  },
];

const rotations = [
  {
    label: 'Annual anchor',
    title: 'Ravens Design Studio',
    detail:
      'Available every year as the Upper School anchor for design, fabrication, physical computing, rapid prototyping, and authentic client or community challenges.',
    courses: ['Ravens Design Studio'],
    tags: ['3D print', 'Laser fabrication', 'Electronics', 'Human-centered design'],
  },
  {
    label: 'Rotation A',
    title: 'Applied Technology + Creative Computing',
    detail:
      'Applied technology options that extend Middle School foundations into responsive systems, autonomous machines, and creative digital experiences.',
    courses: ['Smart Systems & Automation', 'Robotics & Drone Programming', 'Game Design + AR'],
    tags: ['Sensors', 'Drones', 'Automation', 'AR / VR'],
  },
  {
    label: 'Rotation B',
    title: 'Emerging + Advanced Technology',
    detail:
      'Advanced offerings where students investigate automated workflows, intelligent systems, data-rich sensing, and human-computer interaction.',
    courses: ['Automation + Industrial Robotics', 'AI + Computer Vision', 'Neurotechnology'],
    tags: ['Industrial robotics', 'Model training', 'Biosignals', 'HCI'],
  },
];

const portrait = [
  ['Sacred Heart Woman', 'Integrity, reflection, dignity, compassion, service'],
  ['Authentic Leader', 'Confidence, resilience, voice, communication, well-being'],
  ['Agile Thinker', 'Adaptation, connections, stretch, collaboration, feedback'],
  ['Innovative Problem Solver', 'Original solutions, technology, risk, iteration'],
  ['Global Citizen', 'Equity, justice, stewardship, civic responsibility, impact'],
];

const strands = [
  'Programming',
  'Physical Computing',
  'Engineering',
  'Robotics',
  'AI + Data',
  'Automation',
  'Design',
  'Human-Technology Interaction',
  'Documentation',
  'Leadership',
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];
  const progress = useMemo(
    () => Math.round(((activeIndex + 1) / stages.length) * 100),
    [activeIndex],
  );

  return (
    <main className="min-h-screen bg-[var(--ridge-cream)] text-[var(--ridge-ink)]">
      <header className="site-header" aria-label="Innovation pathway header">
        <a className="brand" href="#top" aria-label="Forest Ridge innovation pathway home">
          <span className="brand-mark">FR</span>
          <span>Innovation Pathway</span>
        </a>
        <nav aria-label="Pathway sections">
          <a href="#journey">Journey</a>
          <a href="#courses">Courses</a>
          <a href="#alignment">Alignment</a>
          <a href="#leadership">Leadership</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          src="/assets/campus-hero.png"
          alt="Aerial view of the Forest Ridge campus with trees, buildings, and Lake Washington in the distance"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="kicker">Grades 5-12</p>
            <h1>
              <span>Innovation & Emerging Technology</span>
              <span>Pathway</span>
            </h1>
            <p className="lede">
              A coherent student journey that moves Forest Ridge students from
              technology users to technology creators through coding, robotics,
              automation, AI, immersive media, neurotechnology, and leadership.
            </p>
            <div className="journey-words" aria-label="Pathway sequence">
              {['Make', 'Compute', 'Engineer', 'Integrate', 'Specialize', 'Innovate', 'Lead'].map(
                (word) => (
                  <span key={word}>{word}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="summary-band" aria-label="Pathway summary">
        <div className="summary-grid">
          <div className="metric">
            <strong>5-12</strong>
            <span>A continuous pathway from Middle School foundations to Upper School specialization.</span>
          </div>
          <div className="metric">
            <strong>7</strong>
            <span>Make, Compute, Engineer, Integrate, Specialize, Innovate, and Lead.</span>
          </div>
          <div className="metric">
            <strong>4</strong>
            <span>Upper School innovation offerings available each year through X Blocks.</span>
          </div>
          <div className="metric">
            <strong>1</strong>
            <span>Program promise: complexity, independence, purpose, and leadership.</span>
          </div>
        </div>
      </section>

      <section className="section" id="journey">
        <div className="section-heading">
          <p className="eyebrow">The student journey</p>
          <h2>One pathway, seven moves</h2>
          <p>
            Click a grade band to see the student identity, core experience, key
            competencies, and culminating work.
          </p>
        </div>

        <div className="pathway-shell">
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          <div className="stage-row" role="tablist" aria-label="Grade pathway">
            {stages.map((stage, index) => (
              <button
                className={`stage-dot ${index === activeIndex ? 'active' : ''}`}
                key={stage.grade}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="stage-detail"
              >
                <span className="grade">Grade {stage.grade}</span>
                <strong>{stage.verb}</strong>
              </button>
            ))}
          </div>

          <article className="stage-detail" id="stage-detail">
            <div>
              <p className="eyebrow">{active.course}</p>
              <h3>{active.identity}</h3>
              <p className="question">{active.question}</p>
              <p>{active.summary}</p>
            </div>
            <div className="skill-stack">
              {active.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="capstone">
              <span>Capstone</span>
              <strong>{active.capstone}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="section split" id="courses">
        <div className="section-heading compact">
          <p className="eyebrow">Upper School ecosystem</p>
          <h2>Exploration plus specialization</h2>
          <p>
            X Blocks function as an interconnected set of technology domains, so
            students can follow interest while strengthening shared competencies.
          </p>
        </div>

        <div className="rotation-grid">
          {rotations.map((rotation) => (
            <article className="rotation-card" key={rotation.title}>
              <span>{rotation.label}</span>
              <h3>{rotation.title}</h3>
              <p>{rotation.detail}</p>
              <p className="course-list">
                <strong>Courses:</strong> {rotation.courses.join(', ')}
              </p>
              <div>
                {rotation.tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-band" id="leadership">
        <div>
          <p className="eyebrow">Depth + leadership</p>
          <h2>Co-curricular pathways make growth visible.</h2>
        </div>
        <div className="co-paths">
          <div>
            <strong>Robotics</strong>
            <p>Middle School classroom robotics &gt; VEX IQ &gt; Upper School robotics and automation &gt; VEX V5 &gt; competition, mentoring, and leadership.</p>
          </div>
          <div>
            <strong>Drones</strong>
            <p>Middle School coding foundations &gt; drone programming &gt; autonomous flight, computer vision, AI, and advanced student-designed missions.</p>
          </div>
        </div>
      </section>

      <section className="section alignment" id="alignment">
        <div className="section-heading compact">
          <p className="eyebrow">Mission alignment</p>
          <h2>Rooted in the Portrait of a Graduate and Goals & Criteria</h2>
          <p>
            The pathway connects technical fluency to intellectual curiosity,
            collaboration, ethical decision-making, wise freedom, and action for
            the common good.
          </p>
        </div>

        <div className="alignment-grid">
          <div className="goals-card">
            <h3>Sacred Heart Goals in action</h3>
            <ul>
              <li>Goal II: innovation, collaboration, critical thinking, problem solving, emerging technologies, and evaluation of information.</li>
              <li>Goal III: authentic problems, stewardship, civic responsibility, and community-centered design.</li>
              <li>Goal V: courage, confidence, resilience, ethical technology use, creativity, agility, and wise freedom.</li>
            </ul>
          </div>
          <div className="portrait-card">
            {portrait.map(([title, detail]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strand-marquee" aria-label="Cross-cutting strands">
        {strands.map((strand) => (
          <span key={strand}>{strand}</span>
        ))}
      </section>

      <footer>
        <strong>Graduate outcome</strong>
        <p>Designer | Engineer | Computational Thinker | Ethical Technologist | Innovator | Leader</p>
      </footer>
    </main>
  );
}
