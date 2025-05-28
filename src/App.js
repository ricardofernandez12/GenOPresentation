import React, { useEffect, useState } from 'react';
import './App.css';

const episodes = [
  {
    id: 1,
    title: 'Lo Que Debes Saber Sobre Mí',
    description: 'Soy Ricardo Rivera, estudiante de Ciencias de Cómputos en la UPR Río Piedras, apasionado por crear soluciones tecnológicas que realmente impacten.',
    fullText: `Soy Ricardo Rivera, estudiante de Ciencias de Cómputos en la UPR Río Piedras, apasionado por crear soluciones tecnológicas que realmente impacten. Durante mi experiencia como Project Manager en Banco Popular lideré un rebranding corporativo que fortaleció mis habilidades de liderazgo y resolución de problemas. Más allá de la tecnología, la música es mi refugio creativo: en mi tiempo libre produzco pistas musicales y me encanta grabar nuevas ideas sonoras. Además, encuentro inspiración jugando fútbol; este deporte me ha enseñado el valor del trabajo en equipo, la disciplina y cómo perseguir metas con pasión.`,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
  },
  {
    id: 2,
    title: 'El Desafío del Líder',
    description: 'Durante el rebranding corporativo en Banco Popular, aprendí a liderar equipos diversos y gestionar expectativas bajo presión.',
    fullText: 'Durante el rebranding corporativo en Banco Popular, aprendí a liderar equipos diversos, gestionar expectativas y mantener la visión clara bajo presión. Este reto me enseñó la importancia de la comunicación efectiva y la adaptabilidad para lograr resultados sobresalientes.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop',
  },
  {
    id: 3,
    title: '¿Por qué Oracle GenO?',
    description: 'Mi motivación para unirme a Oracle GenO nace del deseo de crecer en un entorno innovador y desafiante.',
    fullText: 'Mi motivación para unirme a Oracle GenO nace del deseo de crecer en un entorno innovador y desafiante, donde pueda aportar mi pasión por la tecnología y el trabajo en equipo para crear soluciones de impacto global.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop',
  },
  {
    id: 4,
    title: 'Mi Superpoder: Black Panther',
    description: 'Me identifico con Black Panther por su liderazgo desde el corazón y su forma humilde de usar el poder para conectar con otros.',
    fullText: `Me identifico mucho con Black Panther, especialmente con su manera de liderar desde el corazón, tomando decisiones difíciles siempre pensando en el bienestar de su comunidad. Lo que más admiro de él no son solo sus habilidades tecnológicas avanzadas, sino su forma humilde de usar su poder y conocimiento para conectar con otros y generar cambios reales. En mi día a día, intento aplicar ese mismo liderazgo humano, prestando atención genuina a las personas a mi alrededor, entendiendo sus perspectivas y apoyando el crecimiento de todos como equipo.`,
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=225&fit=crop',
  },
  {
    id: 5,
    title: 'Visión del Futuro',
    description: 'Visualizo un futuro donde cada reto es una oportunidad para innovar y liderar con propósito.',
    fullText: 'Visualizo un futuro donde cada reto es una oportunidad para innovar y liderar con propósito. Mi meta es seguir creciendo en Oracle, aprendiendo constantemente, y usando mis habilidades para generar cambios significativos.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEpisodes = () => {
    document.querySelector('.netflix-rows').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="netflix-app">
      {/* Netflix Navbar */}
      <nav className={`netflix-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="netflix-logo">GenO Chronicles</div>
        <div className="netflix-avatar">RR</div>
      </nav>

      {/* Netflix Hero Section */}
      <section className="netflix-hero">
        <div className="netflix-hero-content">
          <h1 className="netflix-hero-title">Ricardo Rivera: GenO Chronicles</h1>
          <p className="netflix-hero-description">
            Una serie narrativa sobre liderazgo, tecnología y visión de futuro. 
            Descubre los episodios que definen mi camino hacia Oracle GenO.
          </p>
          <div>
            <button className="netflix-play-btn" onClick={scrollToEpisodes}>
              ▶ Reproducir
            </button>
            <button className="netflix-info-btn">
              ℹ Más información
            </button>
          </div>
        </div>
      </section>

      {/* Netflix Rows */}
      <section className="netflix-rows">
        <div className="netflix-row">
          <h2 className="netflix-row-title">Episodios de Ricardo Rivera</h2>
          <div className="netflix-row-posters">
            {episodes.map((episode) => (
              <div key={episode.id} className="netflix-poster">
                <img 
                  className="netflix-poster-img"
                  src={episode.image}
                  alt={episode.title}
                />
                <div className="netflix-poster-overlay">
                  <div className="netflix-poster-title">{episode.title}</div>
                  <div className="netflix-poster-description">
                    {episode.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="netflix-row">
          <h2 className="netflix-row-title">Mi Historia Completa</h2>
          <div className="netflix-row-posters">
            {episodes.map((episode) => (
              <div key={`full-${episode.id}`} className="netflix-poster">
                <img 
                  className="netflix-poster-img"
                  src={episode.image}
                  alt={episode.title}
                />
                <div className="netflix-poster-overlay">
                  <div className="netflix-poster-title">{episode.title}</div>
                  <div className="netflix-poster-description">
                    {episode.fullText.substring(0, 120)}...
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="netflix-row">
          <h2 className="netflix-row-title">Destacados</h2>
          <div className="netflix-row-posters">
            {[episodes[3], episodes[0], episodes[4]].map((episode) => (
              <div key={`featured-${episode.id}`} className="netflix-poster">
                <img 
                  className="netflix-poster-img"
                  src={episode.image}
                  alt={episode.title}
                />
                <div className="netflix-poster-overlay">
                  <div className="netflix-poster-title">{episode.title}</div>
                  <div className="netflix-poster-description">
                    {episode.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
