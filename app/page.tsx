export default function Home() {
  return (
    <main>
      <section className="hero container">
        <h2>
          Cloud Architect • DevOps Leader • GenAI Infrastructure Specialist
        </h2>

        <p>
          9 years of experience architecting secure, automation-first cloud
          platforms across AWS, Kubernetes, and enterprise CI/CD ecosystems.
          Specialized in Infrastructure as Code, Zero-Trust architecture, and
          scalable GenAI enablement.
        </p>

        <a href="/resume.pdf" className="resume-btn">
          Download Resume
        </a>
      </section>

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

      <section id="projects" className="container section">
        <h3>Enterprise Architecture Case Studies</h3>

        <div className="card">
          <h4>Enterprise GenAI Platform on AWS</h4>
          <p>
            Designed and deployed a secure enterprise-grade GenAI platform
            leveraging AWS Bedrock, VPC isolation, PrivateLink, Lambda
            orchestration, OpenSearch vector indexing, and Terraform automation.
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
            microservices platform with GitOps workflows and automated rollback.
          </p>
          <ul>
            <li>4x deployment frequency increase</li>
            <li>40% MTTR reduction</li>
            <li>Blue/Green & Canary deployments</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="container section">
        <h3>Contact</h3>
        <p>Email: your.email@example.com</p>
      </section>
    </main>
  );
}