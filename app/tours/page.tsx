export default function ToursPage() {
  const tours = [
    {
      id: 1,
      name: "Gates of the Arctic National Park",
      duration: "Full Day Tour • Alpine Adventure",
      description: "Remote alpine park with pristine peaks and untouched valleys.",
      image: "/aviation-expeditions-images/Tours/gates-of-the-arctic.jpg",
      highlights: ["National Park access", "Remote landing sites"],
      passengers: 3,
      icon: "🏔️",
      fullDescription: "Gates of the Arctic is one of Alaska's most pristine and remote national parks. With no roads accessing the park, our flights provide exclusive access to its untouched wilderness. Experience towering peaks, pristine valleys, and abundant wildlife from the sky."
    },
    {
      id: 2,
      name: "Kobuk Valley National Park",
      duration: "Full Day Tour • Remote Explorer",
      description: "Vast sand dunes and pristine valleys in a seldom-visited park.",
      image: "/aviation-expeditions-images/Tours/kobuk.jpg",
      highlights: ["Sand dunes & valleys", "Fishing/hunting access"],
      passengers: 3,
      icon: "🗻",
      fullDescription: "Kobuk Valley National Park features some of Alaska's most unique landscapes, including the Great Kobuk Sand Dunes—the largest active sand dunes in the Arctic. Perfect for explorers seeking remote, untouched wilderness with excellent wildlife viewing opportunities."
    },
    {
      id: 3,
      name: "Arctic Circle Flight",
      duration: "2-3 Hours • Bucket List",
      description: "Cross the Arctic Circle and earn an official certificate.",
      image: "/aviation-expeditions-images/Tours/arctic-circle.jpg",
      highlights: ["Arctic Circle crossing", "Official certificate"],
      passengers: 3,
      icon: "🎯",
      fullDescription: "One of the most iconic Arctic experiences! Cross the Arctic Circle and receive an official certificate commemorating your journey to 66°33' North. This scenic flight offers stunning views of the transition zone between subarctic and Arctic ecosystems."
    },
    {
      id: 4,
      name: "Denali Vista",
      duration: "3-4 Hours • Mountain Majesty",
      description: "View North America's tallest mountain from the air.",
      image: "/aviation-expeditions-images/Tours/denali.jpg",
      highlights: ["Mount Denali viewing", "Alaska Range scenery"],
      passengers: 3,
      icon: "⛰️",
      fullDescription: "Witness the majesty of Denali (Mount McKinley), North America's tallest peak at 20,310 feet. Our flight provides panoramic views of the Alaska Range and surrounding glaciers. Clear days offer breathtaking photo opportunities."
    },
    {
      id: 5,
      name: "White Mountains & Hotsprings",
      duration: "2-3 Hours • Scenic Loop",
      description: "Scenic White Mountains with remote hotsprings access.",
      image: "/aviation-expeditions-images/Tours/hotsprings.jpg",
      highlights: ["Mountain views", "Hotsprings access"],
      passengers: 3,
      icon: "🏖️",
      fullDescription: "Experience the scenic White Mountains and access remote natural hotsprings. This tour combines stunning mountain views with the unique opportunity to relax in hot springs surrounded by pristine Arctic wilderness."
    },
    {
      id: 6,
      name: "Custom Adventures",
      duration: "Flexible • Your Vision",
      description: "Fully customized for your interests—fishing, hunting, expeditions & more.",
      image: "/aviation-expeditions-images/Tours/custom-trips.jpg",
      highlights: ["Fishing & hunting", "Remote access"],
      passengers: 3,
      icon: "🎣",
      fullDescription: "Every adventure is unique. Whether you want to fly in for fishing, hunting, photography, scientific research, or pure exploration, Sven will customize your flight to match your exact needs and timeline."
    },
  ];

  return (
    <main>
      <section className="tours" style={{ paddingTop: "200px" }}>
        <h2 className="section-title">2026 Tour Experiences</h2>
        <p className="section-subtitle">
          From scenic flightseeing to remote park expeditions, we offer unmatched access to Alaska's most pristine destinations
        </p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div
                className="tour-image"
                style={{ backgroundImage: `url('${tour.image}')` }}
              />
              <div className="tour-info">
                <div>
                  <h3>{tour.name}</h3>
                  <div className="tour-meta">
                    <span className="passengers-badge">
                      <strong>{tour.passengers}</strong> passengers
                    </span>
                    <span className="duration-badge">{tour.duration}</span>
                  </div>
                  <p className="tour-description">{tour.fullDescription}</p>
                  <ul className="tour-highlights">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <a href="mailto:svenhaltmann@gmail.com" className="info-button">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
