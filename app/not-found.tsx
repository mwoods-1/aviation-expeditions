import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-container">
      <section className="not-found-section">
        <div className="not-found-content">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link href="/" className="cta-button cta-primary">
            <span>Return Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
