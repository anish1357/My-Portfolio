import { Stream } from "./components/Stream";
import { experience, person, projects, skills } from "./data";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top">
          Aniswar Gupta
        </a>
        <nav aria-label="Sections">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <h1>
            I build backend systems that keep moving, and the AI agents that
            now run on them.
          </h1>
          <p className="lede">
            I'm a {person.role} at Wells Fargo in {person.location.split(",")[0]},
            with 3+ years of designing event-driven services in Java, Spring Boot
            and Kafka. Lately I put agentic AI into production, where it has to be
            as observable and reliable as everything else.
          </p>
          <div className="actions">
            <a className="button primary" href={`mailto:${person.email}`}>
              Email me
            </a>
            <a className="button" href={person.resume} target="_blank" rel="noreferrer">
              View résumé
            </a>
          </div>
        </section>

        <Stream />

        <section className="block" aria-labelledby="work-heading">
          <h2 id="work-heading">What I work on</h2>
          <div className="focus">
            <div>
              <h3>Systems that stay up under load</h3>
              <p>
                Microservices that talk through Kafka, survive retries and
                duplicates, and tell you when something is wrong before a user does.
              </p>
            </div>
            <div>
              <h3>Agents you can audit</h3>
              <p>
                Multi-agent pipelines with clear steps, persisted state and a human
                in the loop, built with Google ADK, LangChain, RAG and MCP.
              </p>
            </div>
          </div>

          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block" id="experience" aria-labelledby="exp-heading">
          <h2 id="exp-heading">Experience</h2>
          <ol className="timeline">
            {experience.map((r) => (
              <li key={r.org + r.title}>
                <span className="when">{r.when}</span>
                <div className="role">
                  <h3>{r.org}</h3>
                  <p className="title">{r.title}</p>
                  {r.points.length > 0 && (
                    <ul>
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" id="projects" aria-labelledby="proj-heading">
          <h2 id="proj-heading">Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.name}>
                <h3>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                </h3>
                <p>{p.summary}</p>
                {p.stack.length > 0 && (
                  <p className="stack">{p.stack.join(" / ")}</p>
                )}
              </li>
            ))}
          </ul>
          <p className="more">
            More on{" "}
            <a href="https://github.com/anish1357" target="_blank" rel="noreferrer">
              GitHub
            </a>
            , including daily problem solving.
          </p>
        </section>
      </main>

      <footer className="contact" id="contact">
        <h2>Hiring for backend or agent work? Let's talk.</h2>
        <a className="email" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        <ul className="links">
          {person.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="fine">Built by Aniswar in Bengaluru with React and Vite.</p>
      </footer>
    </>
  );
}
