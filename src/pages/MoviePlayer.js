
// export default MoviePlayer;
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MoviePlayer.css';

// Video Player Component
// const VideoPlayer = ({ videoUrl, onClose, movie }) => {
//   return (
//     <div className="video-player-container">
//       <button className="close-player" onClick={onClose}>
//         <i className="fas fa-times"></i>
//       </button>
//       <div className="video-wrapper">
//         <video controls autoPlay className="movie-video">
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// Video Player Component with Quality Selector
const VideoPlayer = ({ videoUrl, onClose, movie }) => {
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('auto');
  const videoRef = useRef(null);
  
  // Mock video quality options
  const qualityOptions = [
    { label: 'Auto', value: 'auto', url: videoUrl },
    { label: '1080p HD', value: '1080p', url: videoUrl.replace('.mp4', '_1080p.mp4') },
    { label: '720p HD', value: '720p', url: videoUrl.replace('.mp4', '_720p.mp4') },
    { label: '480p SD', value: '480p', url: videoUrl.replace('.mp4', '_480p.mp4') },
    { label: '360p', value: '360p', url: videoUrl.replace('.mp4', '_360p.mp4') }
  ];

  const handleQualityChange = (quality) => {
    setCurrentQuality(quality.value);
    setShowQualityMenu(false);
    
    // In a real app, you would change the video source here
    console.log(`Changing to quality: ${quality.label}`);
    
    // For demonstration, we'll just show an alert
    if (quality.value !== 'auto') {
      alert(`Note: This is a demo. In a real application, the video would switch to ${quality.label} quality.`);
    }
  };

  const toggleQualityMenu = () => {
    setShowQualityMenu(!showQualityMenu);
  };

  return (
    <div className="video-player-container">
      <button className="close-player" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
      
      <div className="video-controls-top">
        <div className="quality-selector">
          <button className="quality-btn" onClick={toggleQualityMenu}>
            <i className="fas fa-cog"></i> {currentQuality.toUpperCase()}
          </button>
          {showQualityMenu && (
            <div className="quality-menu">
              {qualityOptions.map((quality) => (
                <button
                  key={quality.value}
                  className={`quality-option ${currentQuality === quality.value ? 'active' : ''}`}
                  onClick={() => handleQualityChange(quality)}
                >
                  {quality.label}
                  {currentQuality === quality.value && <i className="fas fa-check"></i>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="video-wrapper">
        <video ref={videoRef} controls autoPlay className="movie-video">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div className="video-player-info">
        <h2>{movie.title}</h2>
        <div className="video-meta">
          <span className="quality-indicator">
            <i className="fas fa-hd"></i> {currentQuality.toUpperCase()}
          </span>
          <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
          <span className="year">{movie.year}</span>
          <span className="duration">{movie.duration}</span>
        </div>
      </div> */}
    </div>
  );
};

const MoviePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [showVideoPlayer, setShowVideoPlayer] = useState(true);
  const [actors, setActors] = useState([]);

  // Simulate fetching movie data
  useEffect(() => {
    const mockMovies = [
      {
        id: 1,
        title: "The Dark Knight",
        image: "https://source.unsplash.com/random/300x450/?batman",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        rating: 9.0,
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        featured: true,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        longDescription: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between hero and vigilante.",
        duration: "2h 32m",
        releaseDate: "July 18, 2008",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman", "Maggie Gyllenhaal", "Morgan Freeman"]
      },
      // ... other movie data
    ];

    const foundMovie = mockMovies.find(m => m.id === parseInt(id));
    setMovie(foundMovie);
    
    // Get related movies (same genre)
    if (foundMovie) {
      const related = mockMovies.filter(
        m => m.id !== foundMovie.id && 
        m.genres.some(genre => foundMovie.genres.includes(genre))
      );
      setRelatedMovies(related.slice(0, 6));
      
      // Generate actor images based on cast names
      const actorData = foundMovie.cast.map((actor, index) => ({
        id: index + 1,
        name: actor,
        image: `https://source.unsplash.com/random/200x300/?${actor.split(' ')[0].toLowerCase()}`,
        character: `Character ${index + 1}`
      }));
      setActors(actorData);
    }
  }, [id]);

  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
    navigate(-1);
  };

  const handlePlayRelated = (movieId) => {
    navigate(`/movie/${movieId}`);
    window.scrollTo(0, 0);
  };

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-player-page">
      {/* Main Content Area - Video on left, Info on right */}
      <div className="main-content-container">
        {/* Video Player on the left */}
        <div className="video-column">
          {showVideoPlayer && (
            <VideoPlayer videoUrl={movie.video} onClose={closeVideoPlayer} movie={movie} />
          )}
        </div>

        {/* Information on the right */}
        <div className="info-column">
          <div className="movie-info-primary">
            <h1>{movie.title}</h1>
            <div className="movie-meta-info">
              <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
              <span className="year">{movie.year}</span>
              <span className="duration">{movie.duration}</span>
              <div className="genres">
                {movie.genres.map((genre, index) => (
                  <span key={index} className="genre-tag">{genre}</span>
                ))}
              </div>
            </div>
            <p className="movie-description">{movie.longDescription}</p>
          </div>
        </div>
      </div>

      {/* Actors Section */}
      <div className="movie-info-section">
         {/* Information on the right */}
        <div className="info-column">
          <div className="movie-info-secondary">
            <div className="info-row">
              <span className="info-label">Director:</span>
              <span className="info-value">{movie.director}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Release Date:</span>
              <span className="info-value">{movie.releaseDate}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Cast:</span>
              <span className="info-value">{movie.cast.join(', ')}</span>
            </div>
          </div>
        </div>
       <div className="actors-section">
  <h3>Cast</h3>
  <div className="actors-grid">
    {actors.map(actor => (
      <div key={actor.id} className="actor-card">
        <div className="actor-image">
          <img src="https://m.media-amazon.com/images/I/71NnDjm816L._UF1000,1000_QL80_.jpg" alt={actor.name} />
          {/* <img src={actor.image} alt={actor.name} /> */}
        </div>
      </div>
    ))}
    {/* <div className="actor-info">
      <h4>{actor.name}</h4>
      <p>{actor.character}</p>
    </div> */}
  </div>
</div>

      </div>

      {/* Related Movies Section */}
      <div className="related-movies-section">
        <div className="section-header">
          <h2>More Like This</h2>
        </div>
        <div className="related-movies-grid">
          {relatedMovies.map(relatedMovie => (
            <div key={relatedMovie.id} className="related-movie-card">
              <div className="related-movie-poster">
                <img src={relatedMovie.image} alt={relatedMovie.title} />
                <div className="related-movie-overlay">
                  <button 
                    className="play-related-btn"
                    onClick={() => handlePlayRelated(relatedMovie.id)}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <div className="related-movie-info">
                    <h4>{relatedMovie.title}</h4>
                    <div className="card-meta">
                      <span className="rating"><i className="fas fa-star"></i> {relatedMovie.rating}</span>
                      <span className="year">{relatedMovie.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;