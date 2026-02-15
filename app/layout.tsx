export const metadata = {
  title: "Yugandhar E | Cloud Architect",
  description:
    "Cloud Architect | DevOps Engineering Leader | GenAI Infrastructure Specialist",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container nav-inner">
            <h1 className="logo">Yugandhar E</h1>
            <nav>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a
                href="https://linkedin.com/in/yugandhar99"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yugandhar99"
                target="_blank"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}