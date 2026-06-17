export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* HERO */}
      
      <section style={styles.hero}>
        <h1 style={styles.title}>Ankush Srivastava</h1>
        <p style={styles.subtitle}>
          Staff Engineer — Distributed Systems
        </p>
        <p style={styles.description}>
          I build systems that operate under pressure — high throughput,
          low latency, and real-world failure modes.
        </p>
      </section>

      {/* WHAT I DO */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What I Do</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Distributed Systems</h3>
            <p>Designing scalable architectures handling millions of events.</p>
          </div>
          <div style={styles.card}>
            <h3>Real-time Infrastructure</h3>
            <p>WebSockets, Kafka pipelines, and low-latency data delivery.</p>
          </div>
          <div style={styles.card}>
            <h3>Performance Engineering</h3>
            <p>Profiling, optimization, and resource efficiency at scale.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Selected Work</h2>
        <div style={styles.card}>
          <h3>Real-time Market Data Platform</h3>
          <ul>
            <li>Handled 10M+ markets and 1M+ events</li>
            <li>Reduced startup time from 20 min → &lt;1 min</li>
            <li>Cut memory usage by 80%+</li>
            <li>Processed 2.5K+ updates/sec without scaling infra</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About</h2>
        <p style={styles.text}>
          I enjoy working on systems where correctness, latency, and scale
          intersect. Most of my work revolves around building resilient
          infrastructure that continues to perform under stress.
        </p>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.text}>
          Let’s build something meaningful.
        </p>
        <div style={styles.links}>
          <a href="mailto:your-email@gmail.com">Email</a>
          <a href="https://github.com/ankush1593">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin">LinkedIn</a>
        </div>
      </section>

    </main>
  );
}

const styles = {
  container: {
    backgroundColor: "#0a0a0a",
    color: "#eaeaea",
    minHeight: "100vh",
    padding: "60px 20px",
    fontFamily: "system-ui, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  hero: {
    marginBottom: "80px",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#888",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  section: {
    marginBottom: "60px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "20px",
  },
  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "8px",
  },
  text: {
    lineHeight: "1.6",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};