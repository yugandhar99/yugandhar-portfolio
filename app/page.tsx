export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero container">
        <h2>
          Cloud Architect • DevOps Leader • GenAI Infrastructure Specialist
        </h2>

        <p>
          9+ years of experience architecting secure, automation-first cloud
          platforms across AWS, Kubernetes, and enterprise CI/CD ecosystems.
          Specialized in Infrastructure as Code, Zero-Trust architecture,
          and scalable GenAI enablement.
        </p>

        <a href="/resume.pdf" className="resume-btn">
          Download Resume
        </a>
      </section>

      {/* METRICS SECTION */}
      <section className="container section metrics">
        <div className="metric">
          <h2>9+</h2>
          <p>Years Experience</p>
        </div>

        <div className="metric">
          <h2>40%</h2>
          <p>MTTR Reduction</p>
        </div>

        <div className="metric">
          <h2>4x</h2>
          <p>Deployment Frequency</p>
        </div>

        <div className="metric">
          <h2>65%</h2>
          <p>Knowledge Retrieval Improvement</p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="container section">
        <h3>Enterprise Architecture Case Studies</h3>

        <div className="card">
          <h4>Enterprise GenAI Platform on AWS</h4>
          <p>
            Designed and deployed a secure enterprise-grade GenAI platform
            leveraging AWS Bedrock, VPC isolation, PrivateLink connectivity,
            Lambda orchestration, OpenSearch vector indexing, and Terraform automation.
          </p>
          <ul>
            <li>Zero public exposure architecture</li>
            <li>IAM least-privilege enforcement</li>
            <li>KMS encryption at rest & TLS in transit</li>
            <li>65% knowledge retrieval improvement</li>
          </ul>
        </div>

        <div className="card">
          <h4>Kubernetes & CI/CD Platform Modernization</h4>
          <p>
            Re-architected legacy deployment systems into a secure EKS-based
            microservices platform with GitOps workflows, container security
            scanning, and automated rollback strategies.
          </p>
          <ul>
            <li>4x deployment frequency increase</li>
            <li>40% MTTR reduction</li>
            <li>Blue/Green & Canary deployment models</li>
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="container section">
        <h3>Contact</h3>

        <div className="contact-grid">
          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:yugandhare08@gmail.com">
                yugandhare08@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>
              <a href="tel:+1234567890">
                +1 234 567 890
              </a>
            </p>
          </div>

          <div>
            <h4>Location</h4>
            <p>United States</p>
          </div>

          <div>
            <h4>LinkedIn</h4>
            <p>
              <a
                href="https://linkedin.com/in/yugandhar99"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yugandhar99
              </a>
            </p>
          </div>

          <div>
            <h4>GitHub</h4>
            <p>
              <a
                href="https://github.com/yugandhar99"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yugandhar99
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}