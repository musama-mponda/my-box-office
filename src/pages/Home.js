// // // import React, { useState } from 'react';
// // // import ActorGrid from '../components/actor/ActorGrid';
// // // import CustomRadio from '../components/CustomRadio';
// // // import MainPageLayout from '../components/MainPageLayout';
// // // import ShowGrid from '../components/show/ShowGrid';
// // // import { apiGEt } from '../misc/config';
// // // import { useLastQuery } from '../misc/custom-hooks';
// // // import {
// // //   RadioInputsWrapper,
// // //   SearchButtonWrapper,
// // //   SearchInput,
// // // } from './Home.styled';

// // // const Home = () => {
// // //   const [input, setInput] = useLastQuery();
// // //   const [results, setResults] = useState(null);
// // //   const [searchOption, setSearchOption] = useState('shows');

// // //   const isShowsSearch = searchOption === 'shows';

// // //   const onSearch = () => {
// // //     apiGEt(`/search/${searchOption}?q=${input}`).then(result => {
// // //       setResults(result);
// // //     });
// // //   };

// // //   const onInputChange = ev => {
// // //     setInput(ev.target.value);
// // //   };

// // //   const onKeyDown = ev => {
// // //     if (ev.keyCode === 13) {
// // //       onSearch();
// // //     }
// // //   };

// // //   const onRadioChange = ev => {
// // //     setSearchOption(ev.target.value);
// // //   };

// // //   const renderResults = () => {
// // //     if (results && results.length === 0) {
// // //       return <div>No Results</div>;
// // //     }
// // //     if (results && results.length > 0) {
// // //       return results[0].show ? (
// // //         <ShowGrid data={results} />
// // //       ) : (
// // //         <ActorGrid data={results} />
// // //       );
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <MainPageLayout>
// // //       <SearchInput
// // //         type="text"
// // //         placeholder="Search for something"
// // //         onChange={onInputChange}
// // //         onKeyDown={onKeyDown}
// // //         value={input}
// // //       />
// // //       <RadioInputsWrapper>
// // //         <div>
// // //           <CustomRadio
// // //             label="Shows"
// // //             id="shows.search"
// // //             value="shows"
// // //             checked={isShowsSearch}
// // //             onChange={onRadioChange}
// // //           />
// // //         </div>

// // //         <div>
// // //           <CustomRadio
// // //             label="Actors"
// // //             id="actors.search"
// // //             value="people"
// // //             checked={!isShowsSearch}
// // //             onChange={onRadioChange}
// // //           />
// // //         </div>
// // //       </RadioInputsWrapper>

// // //       <SearchButtonWrapper>
// // //         <button type="button" onClick={onSearch}>
// // //           Search
// // //         </button>
// // //       </SearchButtonWrapper>
// // //       {renderResults()}
// // //     </MainPageLayout>
// // //   );
// // // };

// // // export default Home;

// // import React, { useState, useEffect } from 'react';
// // import './Home.css';

// // const Home = () => {
// //   const [movies, setMovies] = useState([]);
// //   const [featuredMovies, setFeaturedMovies] = useState([]);
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // Simulate fetching movies from an API
// //   useEffect(() => {
// //     // In a real app, this would be an API call
// //     const mockMovies = [
// //       {
// //         id: 1,
// //         title: "The Dark Knight",
// //         image: "https://source.unsplash.com/random/300x450/?batman",
// //         rating: 9.0,
// //         year: 2008,
// //         genres: ["Action", "Crime", "Drama"],
// //         featured: true,
// //         description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
// //       },
// //       {
// //         id: 2,
// //         title: "Inception",
// //         image: "https://source.unsplash.com/random/300x450/?dream",
// //         rating: 8.8,
// //         year: 2010,
// //         genres: ["Action", "Adventure", "Sci-Fi"],
// //         featured: true,
// //         description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
// //       },
// //       {
// //         id: 3,
// //         title: "Pulp Fiction",
// //         image: "https://source.unsplash.com/random/300x450/?retro",
// //         rating: 8.9,
// //         year: 1994,
// //         genres: ["Crime", "Drama"],
// //         featured: true,
// //         description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
// //       },
// //       {
// //         id: 4,
// //         title: "The Shawshank Redemption",
// //         image: "https://source.unsplash.com/random/300x450/?prison",
// //         rating: 9.3,
// //         year: 1994,
// //         genres: ["Drama"],
// //         featured: false,
// //         description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
// //       },
// //       {
// //         id: 5,
// //         title: "The Godfather",
// //         image: "https://source.unsplash.com/random/300x450/?mafia",
// //         rating: 9.2,
// //         year: 1972,
// //         genres: ["Crime", "Drama"],
// //         featured: false,
// //         description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
// //       },
// //       {
// //         id: 6,
// //         title: "Fight Club",
// //         image: "https://source.unsplash.com/random/300x450/?fight",
// //         rating: 8.8,
// //         year: 1999,
// //         genres: ["Drama"],
// //         featured: false,
// //         description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
// //       },
// //       {
// //         id: 7,
// //         title: "Forrest Gump",
// //         image: "https://source.unsplash.com/random/300x450/?running",
// //         rating: 8.8,
// //         year: 1994,
// //         genres: ["Drama", "Romance"],
// //         featured: false,
// //         description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
// //       },
// //       {
// //         id: 8,
// //         title: "The Matrix",
// //         image: "https://source.unsplash.com/random/300x450/?matrix",
// //         rating: 8.7,
// //         year: 1999,
// //         genres: ["Action", "Sci-Fi"],
// //         featured: false,
// //         description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
// //       }
// //     ];

// //     setMovies(mockMovies);
// //     setFeaturedMovies(mockMovies.filter(movie => movie.featured));
// //   }, []);

// //   // Auto-rotate carousel
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
// //     }, 5000);
    
// //     return () => clearInterval(timer);
// //   }, [featuredMovies.length]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
// //   };

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index);
// //   };

// //   return (
// //     <div className="movie-box-home">
// //       {/* Navigation Bar */}
// //       <nav className="movie-nav">
// //         <div className="nav-container">
// //           <h1 className="logo">Flixoria</h1>
// //           <div className="nav-links">
// //             <a href="#home">Home</a>
// //             <a href="#movies">Movies</a>
// //             <a href="#series">TV Series</a>
// //             <a href="#new">New & Popular</a>
// //           </div>
// //           <div className="nav-actions">
// //             <button className="search-btn">
// //               <i className="fas fa-search"></i>
// //             </button>
// //             <button className="user-btn">
// //               <i className="fas fa-user"></i>
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Carousel */}
// //       <section className="hero-carousel">
// //         {featuredMovies.map((movie, index) => (
// //           <div 
// //             key={movie.id} 
// //             className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
// //             style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${movie.image.replace('300x450', '1200x600')})` }}
// //           >
// //             <div className="slide-content">
// //               <h2>{movie.title}</h2>
// //               <div className="movie-meta">
// //                 <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
// //                 <span className="year">{movie.year}</span>
// //                 <div className="genres">
// //                   {movie.genres.map((genre, i) => (
// //                     <span key={i} className="genre">{genre}</span>
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="description">{movie.description}</p>
// //               <div className="action-buttons">
// //                 <button className="play-btn">
// //                   <i className="fas fa-play"></i> Play Now
// //                 </button>
// //                 <button className="info-btn">
// //                   <i className="fas fa-info-circle"></i> More Info
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
        
// //         <button className="carousel-control prev" onClick={prevSlide}>
// //           <i className="fas fa-chevron-left"></i>
// //         </button>
// //         <button className="carousel-control next" onClick={nextSlide}>
// //           <i className="fas fa-chevron-right"></i>
// //         </button>
        
// //         <div className="carousel-indicators">
// //           {featuredMovies.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`indicator ${index === currentSlide ? 'active' : ''}`}
// //               onClick={() => goToSlide(index)}
// //             />
// //           ))}
// //         </div>
// //       </section>

// //       {/* Movie Sections */}
// //       <main className="movie-sections">
// //         <section className="movie-section">
// //           <h2>Popular on Flixoria</h2>
// //           <div className="movie-grid">
// //             {movies.slice(0, 6).map(movie => (
// //               <div key={movie.id} className="movie-card">
// //                 <div className="movie-poster">
// //                   <img src={movie.image} alt={movie.title} />
// //                   <div className="movie-overlay">
// //                     <button className="play-icon">
// //                       <i className="fas fa-play"></i>
// //                     </button>
// //                     <button className="info-icon">
// //                       <i className="fas fa-info-circle"></i>
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="movie-info">
// //                   <h3>{movie.title}</h3>
// //                   <div className="card-meta">
// //                     <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
// //                     <span className="year">{movie.year}</span>
// //                   </div>
// //                   <div className="genres">
// //                     {movie.genres.slice(0, 2).map((genre, i) => (
// //                       <span key={i} className="genre">{genre}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <section className="movie-section">
// //           <h2>Trending Now</h2>
// //           <div className="movie-grid">
// //             {movies.slice(3, 9).map(movie => (
// //               <div key={movie.id} className="movie-card">
// //                 <div className="movie-poster">
// //                   <img src={movie.image} alt={movie.title} />
// //                   <div className="movie-overlay">
// //                     <button className="play-icon">
// //                       <i className="fas fa-play"></i>
// //                     </button>
// //                     <button className="info-icon">
// //                       <i className="fas fa-info-circle"></i>
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="movie-info">
// //                   <h3>{movie.title}</h3>
// //                   <div className="card-meta">
// //                     <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
// //                     <span className="year">{movie.year}</span>
// //                   </div>
// //                   <div className="genres">
// //                     {movie.genres.slice(0, 2).map((genre, i) => (
// //                       <span key={i} className="genre">{genre}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="movie-footer">
// //         <div className="footer-content">
// //           <div className="footer-section">
// //             <h3>Flixoria</h3>
// //             <p>The best place to discover and watch your favorite movies and TV shows.</p>
// //           </div>
// //           <div className="footer-section">
// //             <h4>Navigation</h4>
// //             <ul>
// //               <li><a href="#home">Home</a></li>
// //               <li><a href="#movies">Movies</a></li>
// //               <li><a href="#series">TV Series</a></li>
// //               <li><a href="#new">New & Popular</a></li>
// //             </ul>
// //           </div>
// //           <div className="footer-section">
// //             <h4>Follow Us</h4>
// //             <div className="social-icons">
// //               <a href="#facebook"><i className="fab fa-facebook"></i></a>
// //               <a href="#twitter"><i className="fab fa-twitter"></i></a>
// //               <a href="#instagram"><i className="fab fa-instagram"></i></a>
// //               <a href="#youtube"><i className="fab fa-youtube"></i></a>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="footer-bottom">
// //           <p>&copy; 2023 Flixoria. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './Home.css';

// // Video Player Component
// const VideoPlayer = ({ videoUrl, onClose }) => {
//   return (
//     <div className="video-player-overlay">
//       <div className="video-player-container">
//         <button className="close-player" onClick={onClose}>
//           <i className="fas fa-times"></i>
//         </button>
//         <div className="video-wrapper">
//           <video controls autoPlay className="movie-video">
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Movie Detail Component
// const MovieDetail = ({ movie, onClose, onPlay }) => {
//   return (
//     <div className="movie-detail-overlay">
//       <div className="movie-detail-container">
//         <button className="close-detail" onClick={onClose}>
//           <i className="fas fa-times"></i>
//         </button>
//         <div 
//           className="detail-hero"
//           style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${movie.image.replace('300x450', '800x450')})` }}
//         >
//           <div className="detail-content">
//             <h2>{movie.title}</h2>
//             <div className="movie-meta">
//               <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
//               <span className="year">{movie.year}</span>
//               <div className="genres">
//                 {movie.genres.map((genre, i) => (
//                   <span key={i} className="genre">{genre}</span>
//                 ))}
//               </div>
//             </div>
//             <p className="description">{movie.description}</p>
//             <div className="action-buttons">
//               <button className="play-btn" onClick={() => onPlay(movie)}>
//                 <i className="fas fa-play"></i> Play Now
//               </button>
//               <button className="trailer-btn">
//                 <i className="fas fa-film"></i> Watch Trailer
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="detail-info">
//           <h3>Storyline</h3>
//           <p>{movie.description}</p>
//           <div className="detail-specs">
//             <div className="spec">
//               <span className="spec-label">Release Date:</span>
//               <span className="spec-value">{movie.year}</span>
//             </div>
//             <div className="spec">
//               <span className="spec-label">Rating:</span>
//               <span className="spec-value">{movie.rating}/10</span>
//             </div>
//             <div className="spec">
//               <span className="spec-label">Genres:</span>
//               <span className="spec-value">{movie.genres.join(', ')}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Home Component
// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [featuredMovies, setFeaturedMovies] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [showVideoPlayer, setShowVideoPlayer] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState('');
//   const navigate = useNavigate();

//   // Free video URLs from various sources (these are sample free videos)
//   const freeVideos = [
//     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
//   ];

//   // Simulate fetching movies from an API
//   useEffect(() => {
//     const mockMovies = [
//       {
//         id: 1,
//         title: "The Dark Knight",
//         image: "https://source.unsplash.com/random/300x450/?batman",
//         rating: 9.0,
//         year: 2008,
//         genres: ["Action", "Crime", "Drama"],
//         featured: true,
//         description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
//       },
//       {
//         id: 2,
//         title: "Inception",
//         image: "https://source.unsplash.com/random/300x450/?dream",
//         rating: 8.8,
//         year: 2010,
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         featured: true,
//         description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
//       },
//       {
//         id: 3,
//         title: "Pulp Fiction",
//         image: "https://source.unsplash.com/random/300x450/?retro",
//         rating: 8.9,
//         year: 1994,
//         genres: ["Crime", "Drama"],
//         featured: true,
//         description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
//       },
//       {
//         id: 4,
//         title: "The Shawshank Redemption",
//         image: "https://source.unsplash.com/random/300x450/?prison",
//         rating: 9.3,
//         year: 1994,
//         genres: ["Drama"],
//         featured: false,
//         description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
//       },
//       {
//         id: 5,
//         title: "The Godfather",
//         image: "https://source.unsplash.com/random/300x450/?mafia",
//         rating: 9.2,
//         year: 1972,
//         genres: ["Crime", "Drama"],
//         featured: false,
//         description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
//       },
//       {
//         id: 6,
//         title: "Fight Club",
//         image: "https://source.unsplash.com/random/300x450/?fight",
//         rating: 8.8,
//         year: 1999,
//         genres: ["Drama"],
//         featured: false,
//         description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
//       },
//       {
//         id: 7,
//         title: "Forrest Gump",
//         image: "https://source.unsplash.com/random/300x450/?running",
//         rating: 8.8,
//         year: 1994,
//         genres: ["Drama", "Romance"],
//         featured: false,
//         description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
//       },
//       {
//         id: 8,
//         title: "The Matrix",
//         image: "https://source.unsplash.com/random/300x450/?matrix",
//         rating: 8.7,
//         year: 1999,
//         genres: ["Action", "Sci-Fi"],
//         featured: false,
//         description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
//       }
//     ];

//     setMovies(mockMovies);
//     setFeaturedMovies(mockMovies.filter(movie => movie.featured));
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [featuredMovies.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const handlePlayMovie = (movie) => {
//     // Select a random free video from our list
//     const randomVideo = freeVideos[Math.floor(Math.random() * freeVideos.length)];
//     setCurrentVideo(randomVideo);
//     setShowVideoPlayer(true);
//   };

//   const handleInfoClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const closeVideoPlayer = () => {
//     setShowVideoPlayer(false);
//     setCurrentVideo('');
//   };

//   const closeMovieDetail = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <div className="movie-box-home">
//       {/* Navigation Bar */}
//       <nav className="movie-nav">
//         <div className="nav-container">
//           <h1 className="logo">Flixoria</h1>
//           <div className="nav-links">
//             <a href="#home">Home</a>
//             <a href="#movies">Movies</a>
//             <a href="#series">TV Series</a>
//             <a href="#new">New & Popular</a>
//           </div>
//           <div className="nav-actions">
//             <button className="search-btn">
//               <i className="fas fa-search"></i>
//             </button>
//             <button className="user-btn">
//               <i className="fas fa-user"></i>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Carousel */}
//       <section className="hero-carousel">
//         {featuredMovies.map((movie, index) => (
//           <div 
//             key={movie.id} 
//             className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${movie.image.replace('300x450', '1200x600')})` }}
//           >
//             <div className="slide-content">
//               <h2>{movie.title}</h2>
//               <div className="movie-meta">
//                 <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
//                 <span className="year">{movie.year}</span>
//                 <div className="genres">
//                   {movie.genres.map((genre, i) => (
//                     <span key={i} className="genre">{genre}</span>
//                   ))}
//                 </div>
//               </div>
//               <p className="description">{movie.description}</p>
//               <div className="action-buttons">
//                 <button className="play-btn" onClick={() => handlePlayMovie(movie)}>
//                   <i className="fas fa-play"></i> Play Now
//                 </button>
//                 <button className="info-btn" onClick={() => handleInfoClick(movie)}>
//                   <i className="fas fa-info-circle"></i> More Info
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         <button className="carousel-control prev" onClick={prevSlide}>
//           <i className="fas fa-chevron-left"></i>
//         </button>
//         <button className="carousel-control next" onClick={nextSlide}>
//           <i className="fas fa-chevron-right"></i>
//         </button>
        
//         <div className="carousel-indicators">
//           {featuredMovies.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Movie Sections */}
//       <main className="movie-sections">
//         <section className="movie-section">
//           <h2>Popular on Flixoria</h2>
//           <div className="movie-grid">
//             {movies.slice(0, 6).map(movie => (
//               <div key={movie.id} className="movie-card">
//                 <div className="movie-poster">
//                   <img src={movie.image} alt={movie.title} />
//                   <div className="movie-overlay">
//                     <button className="play-icon" onClick={() => handlePlayMovie(movie)}>
//                       <i className="fas fa-play"></i>
//                     </button>
//                     <button className="info-icon" onClick={() => handleInfoClick(movie)}>
//                       <i className="fas fa-info-circle"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="movie-info">
//                   <h3>{movie.title}</h3>
//                   <div className="card-meta">
//                     <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
//                     <span className="year">{movie.year}</span>
//                   </div>
//                   <div className="genres">
//                     {movie.genres.slice(0, 2).map((genre, i) => (
//                       <span key={i} className="genre">{genre}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="movie-section">
//           <h2>Trending Now</h2>
//           <div className="movie-grid">
//             {movies.slice(3, 9).map(movie => (
//               <div key={movie.id} className="movie-card">
//                 <div className="movie-poster">
//                   <img src={movie.image} alt={movie.title} />
//                   <div className="movie-overlay">
//                     <button className="play-icon" onClick={() => handlePlayMovie(movie)}>
//                       <i className="fas fa-play"></i>
//                     </button>
//                     <button className="info-icon" onClick={() => handleInfoClick(movie)}>
//                       <i className="fas fa-info-circle"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="movie-info">
//                   <h3>{movie.title}</h3>
//                   <div className="card-meta">
//                     <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
//                     <span className="year">{movie.year}</span>
//                   </div>
//                   <div className="genres">
//                     {movie.genres.slice(0, 2).map((genre, i) => (
//                       <span key={i} className="genre">{genre}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="movie-footer">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>Flixoria</h3>
//             <p>The best place to discover and watch your favorite movies and TV shows.</p>
//           </div>
//           <div className="footer-section">
//             <h4>Navigation</h4>
//             <ul>
//               <li><a href="#home">Home</a></li>
//               <li><a href="#movies">Movies</a></li>
//               <li><a href="#series">TV Series</a></li>
//               <li><a href="#new">New & Popular</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Follow Us</h4>
//             <div className="social-icons">
//               <a href="#facebook"><i className="fab fa-facebook"></i></a>
//               <a href="#twitter"><i className="fab fa-twitter"></i></a>
//               <a href="#instagram"><i className="fab fa-instagram"></i></a>
//               <a href="#youtube"><i className="fab fa-youtube"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2023 Flixoria. All rights reserved.</p>
//         </div>
//       </footer>

//       {/* Video Player Overlay */}
//       {showVideoPlayer && (
//         <VideoPlayer videoUrl={currentVideo} onClose={closeVideoPlayer} />
//       )}

//       {/* Movie Detail Overlay */}
//       {selectedMovie && (
//         <MovieDetail 
//           movie={selectedMovie} 
//           onClose={closeMovieDetail} 
//           onPlay={handlePlayMovie}
//         />
//       )}
//     </div>
//   );
// };
// export default Home;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './Home.css';

// Home Component
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  // Simulate fetching movies from an API
  useEffect(() => {
    const mockMovies = [
      {
        id: 1,
        title: "The Dark Knight",
        image: "https://images.justwatch.com/backdrop/304564127/s640/the-dark-knight",
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
      {
        id: 2,
        title: "Inception",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzBArbJlViN1A3SaBDx_S7jp27n5JhXSVPQ&s",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        rating: 8.8,
        year: 2010,
        genres: ["Action", "Adventure", "Sci-Fi"],
        featured: true,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        longDescription: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage.",
        duration: "2h 28m",
        releaseDate: "July 16, 2010",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe", "Cillian Murphy", "Tom Berenger"]
      },
      {
        id: 3,
        title: "Pulp Fiction",
        image: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTXUxBqqR9nO9fiKrors9TwbFBD4VDIupiK1Y6HUKGui3OKiu6rStQkcI69zz7OsoLVmPvNDmSq5vhi0WpWBMnI8b8VB1-1yojF5.jpg?r=3b9",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        rating: 8.9,
        year: 1994,
        genres: ["Crime", "Drama"],
        featured: true,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        longDescription: "Jules Winnfield and Vincent Vega are two hitmen who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace. Wallace has also asked Vincent to take his wife Mia out a few days later when Wallace himself will be out of town.",
        duration: "2h 34m",
        releaseDate: "October 14, 1994",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis", "Ving Rhames", "Harvey Keitel", "Tim Roth"]
      },
      {
        id: 4,
        title: "The Shawshank Redemption",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtDw8WiCehLnNUkPpn7Oeb9qfD-jDPgA4ag&s",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        rating: 9.3,
        year: 1994,
        genres: ["Drama"],
        featured: false,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        longDescription: "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.",
        duration: "2h 22m",
        releaseDate: "September 23, 1994",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown", "Gil Bellows", "James Whitmore"]
      },
      {
        id: 5,
        title: "The Godfather",
        image: "https://images.justwatch.com/backdrop/268368078/s640/the-godfather",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        rating: 9.2,
        year: 1972,
        genres: ["Crime", "Drama"],
        featured: false,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        longDescription: "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business.",
        duration: "2h 55m",
        releaseDate: "March 24, 1972",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Richard Castellano", "Robert Duvall", "Sterling Hayden", "John Marley"]
      },
      {
        id: 6,
        title: "Fight Club",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1GMLFFCJDoWaIlnXm66IX4v238OwsujJgw&s",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        rating: 8.8,
        year: 1999,
        genres: ["Drama"],
        featured: false,
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        longDescription: "A depressed man suffering from insomnia meets a strange soap salesman named Tyler Durden and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives.",
        duration: "2h 19m",
        releaseDate: "October 15, 1999",
        director: "David Fincher",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf", "Jared Leto", "Zach Grenier", "Holt McCallany"]
      },
      {
        id: 7,
        title: "Forrest Gump",
        image: "https://images.justwatch.com/backdrop/238052655/s640/forrest-gump",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        rating: 8.8,
        year: 1994,
        genres: ["Drama", "Romance"],
        featured: false,
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        longDescription: "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba.",
        duration: "2h 22m",
        releaseDate: "July 6, 1994",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson", "Michael Conner Humphreys", "Hanna Hall"]
      },
      {
        id: 8,
        title: "The Matrix",
        image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/603/images/7u3pxc0K1wx32IleAkLv78MKgrw.jpg?ar=16:9&fit=crop&crop=top",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        rating: 8.7,
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        featured: false,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        longDescription: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government.",
        duration: "2h 16m",
        releaseDate: "March 31, 1999",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano", "Marcus Chong", "Gloria Foster"]
      }
    ];

    setMovies(mockMovies);
    setFeaturedMovies(mockMovies.filter(movie => movie.featured));
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePlayMovie = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  const handleInfoClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetail = () => {
    setSelectedMovie(null);
  };

  // Get related movies (excluding the current one)
  const getRelatedMovies = (currentMovie) => {
    return movies
      .filter(movie => movie.id !== currentMovie.id && movie.genres.some(genre => currentMovie.genres.includes(genre)))
      .slice(0, 6);
  };

  return (
    <div className="movie-box-home">
      {/* Navigation Bar */}
      <nav className="movie-nav">
        <div className="nav-container">
          <h1 className="logo">Flixoria</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#series">TV Series</a>
            <a href="#new">New & Popular</a>
          </div>
          <div className="nav-actions">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="user-btn">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="hero-carousel">
        {featuredMovies.map((movie, index) => (
          <div 
            key={movie.id} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${movie.image.replace('300x450', '1200x600')})` }}
          >
            <div className="slide-content">
              <h2>{movie.title}</h2>
              <div className="movie-meta">
                <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
                <span className="year">{movie.year}</span>
                <div className="genres">
                  {movie.genres.map((genre, i) => (
                    <span key={i} className="genre">{genre}</span>
                  ))}
                </div>
              </div>
              <p className="description">{movie.description}</p>
              <div className="action-buttons">
                <button className="play-btn" onClick={() => handlePlayMovie(movie)}>
                  <i className="fas fa-play"></i> Play Now
                </button>
                <button className="info-btn" onClick={() => handleInfoClick(movie)}>
                  <i className="fas fa-info-circle"></i> More Info
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button className="carousel-control prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        
        <div className="carousel-indicators">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Movie Sections */}
      <main className="movie-sections">
        <section className="movie-section">
          <h2>Popular on Flixoria</h2>
          <div className="movie-grid">
            {movies.slice(0, 6).map(movie => (
              <div key={movie.id} className="movie-card">
                <div className="movie-poster">
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-overlay">
                    <button className="play-icon" onClick={() => handlePlayMovie(movie)}>
                      <i className="fas fa-play"></i>
                    </button>
                    <button className="info-icon" onClick={() => handleInfoClick(movie)}>
                      <i className="fas fa-info-circle"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="card-meta">
                    <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
                    <span className="year">{movie.year}</span>
                  </div>
                  <div className="genres">
                    {movie.genres.slice(0, 2).map((genre, i) => (
                      <span key={i} className="genre">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="movie-section">
          <h2>Trending Now</h2>
          <div className="movie-grid">
            {movies.slice(3, 9).map(movie => (
              <div key={movie.id} className="movie-card">
                <div className="movie-poster">
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-overlay">
                    <button className="play-icon" onClick={() => handlePlayMovie(movie)}>
                      <i className="fas fa-play"></i>
                    </button>
                    <button className="info-icon" onClick={() => handleInfoClick(movie)}>
                      <i className="fas fa-info-circle"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="card-meta">
                    <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
                    <span className="year">{movie.year}</span>
                  </div>
                  <div className="genres">
                    {movie.genres.slice(0, 2).map((genre, i) => (
                      <span key={i} className="genre">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

   {/* Footer */}
      <footer className="movie-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Flixoria</h3>
            <p>The best place to discover and watch your favorite movies and TV shows.</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#movies">Movies</a></li>
              <li><a href="#series">TV Series</a></li>
              <li><a href="#new">New & Popular</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#youtube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Flixoria. All rights reserved.</p>
        </div>
      </footer>

   
    </div>
  );
};
export default Home;

