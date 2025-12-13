"use client";

import Image from "next/image";

export default function AboutSvenPage() {
  return (
    <main>
      {/* About Sven Section */}
      <section style={{
        padding: '200px 2rem 6rem',
        position: 'relative',
        zIndex: '2',
        background: 'linear-gradient(180deg, rgba(30, 90, 150, 0.2) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
        {/* Hero Image and Intro */}
        <div style={{
          marginBottom: '5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #00d4ff 0%, #f0f4f8 50%, #ffa500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              whiteSpace: 'nowrap',
            }}>
              Meet Your Pilot: Sven
            </h1>
            <p style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              marginBottom: '2rem',
              color: '#a8b8cc',
              fontWeight: '400',
            }}>
              Arctic Explorer & Commercial Pilot
            </p>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '1.5rem',
              fontSize: '1rem',
            }}>
              Born and raised in the Swiss Alps, Sven spent his youth exploring stunning mountain landscapes. In 2000, he moved to Alaska to embrace a more unconventional and adventurous lifestyle.
            </p>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '1.5rem',
              fontSize: '1rem',
            }}>
              He's lived in Alaska for over two decades, spending summers fighting fires with Pioneer Peak Hotshots across the state and completing multiple Iditarod sled dog races. Today, he calls both Fairbanks and his Bettles cabin home.
            </p>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '0',
              fontSize: '1rem',
            }}>
              With his invaluable knowledge of Alaska's interior and arctic regions, Sven provides safe, reliable, and prompt flying services to adventurers, explorers, hunters, fishermen, and expedition teams. His passion for aviation and intimate knowledge of the Brooks Range make him the perfect guide for your Alaskan adventure.
            </p>
          </div>

          {/* Pilot Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 212, 255, 0.1)',
            }}>
              <Image
                src="/aviation-expeditions-images/about-pilot-placeholder.jpg"
                alt="Sven with Aircraft"
                width={380}
                height={550}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div style={{
          marginBottom: '5rem',
        }}>
          <h3 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '2rem',
            color: '#00d4ff',
            marginBottom: '3rem',
            textAlign: 'center',
          }}>
            Experience & Expertise
          </h3>

          <ul className="experience-list" style={{
            listStyle: 'none',
            margin: '0',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>25+ Years in Alaska</strong>Extensive experience navigating Alaska's unique terrain and weather patterns</span>
            </li>

            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>Pioneer Peak Hotshots</strong>Multiple seasons fighting wildfires across Alaska's interior</span>
            </li>

            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>Iditarod Racer</strong>Veteran of multiple grueling sled dog race expeditions</span>
            </li>

            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>Commercial Pilot License</strong>Licensed and skilled in operating bush aircraft in extreme conditions</span>
            </li>

            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>Remote Landing Expert</strong>Master of unprepared airstrips and challenging terrain</span>
            </li>

            <li style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              color: '#a8b8cc',
              fontSize: '1rem',
              lineHeight: '1.8',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <span style={{color: '#00d4ff', fontWeight: 'bold', fontSize: '1.5rem', flexShrink: 0}}>✓</span>
              <span><strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.5rem'}}>Brooks Range Authority</strong>Intimate knowledge of one of Alaska's most spectacular regions</span>
            </li>
          </ul>
        </div>

        {/* Aircraft Showcase */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          borderRadius: '16px',
          padding: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{position: 'relative', zIndex: '1'}}>
            <div style={{
              color: '#ffa500',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Your Aircraft
            </div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '2.5rem',
              color: '#00d4ff',
              marginBottom: '1rem',
              letterSpacing: '-0.5px',
            }}>
              1977 Cessna A185F
            </h3>
            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.8',
              marginBottom: '3rem',
              fontSize: '1.05rem',
              maxWidth: '700px',
            }}>
              One of Alaska's most versatile and beloved aircraft. Purpose-built for remote exploration with comfortable cabin, maximum visibility, and proven reliability in extreme conditions.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Seating Capacity</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>4 passengers (including pilot)</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Window Seats</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>100% — every passenger has a window</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Cargo Capacity</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>Some room for gear and personal items</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Features</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>Modified skylight for optimal viewing</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Communication</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>Headsets for all passengers + pilot</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 212, 255, 0.1)',
              }}>
                <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Safety</span>
                <span style={{color: '#a8b8cc', fontSize: '1rem'}}>Fully weight-loaded per FAA standards</span>
              </div>
            </div>

            {/* Charter Info Box */}
            <div style={{
              marginTop: '3rem',
              background: 'rgba(0, 212, 255, 0.1)',
              borderLeft: '4px solid #00d4ff',
              padding: '2rem',
              borderRadius: '8px',
            }}>
              <p style={{
                color: '#a8b8cc',
                fontSize: '1rem',
                lineHeight: '1.8',
                margin: '0',
              }}>
                <strong style={{color: '#f0f4f8'}}>Charter Rate:</strong> You charter the aircraft, not individual seats. Rate depends on flight duration and current fuel prices. <a href="/inquiry" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600', cursor: 'pointer', transition: 'opacity 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Inquire Now</a> for personalized pricing.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

    </main>
  );
}
