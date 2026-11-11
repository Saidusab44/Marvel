import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        MARVEL<span> STUDIOS</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>

    </nav>
  );
}


// Home Page Component
function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">WELCOME TO THE MARVEL UNIVERSE</p>

          <h1>
            ENTER THE <span>MARVEL</span>
            <br />
            CINEMATIC UNIVERSE
          </h1>

          <p className="hero-description">
            Discover legendary superheroes, unforgettable stories
            and extraordinary adventures from across the Marvel Universe.
          </p>

          <a href="#movies" className="primary-btn">
            EXPLORE MOVIES
          </a>

        </div>

      </section>


      {/* Moving Text */}
      <div className="marvel-strip">
        <p>
          MARVEL STUDIOS • HEROES NEVER GIVE UP • THE MULTIVERSE
          • LEGENDS ARE BORN • MARVEL STUDIOS
        </p>
      </div>


      {/* Introduction Section */}
      <section className="intro-section">

        <div className="section-heading">
          <p>THE WORLD OF MARVEL</p>
          <h2>MORE THAN JUST <span>HEROES</span></h2>
        </div>

        <div className="intro-content">

          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
              alt="Marvel universe inspired cosmic background"
            />
          </div>

          <div className="intro-text">

            <h3>Welcome to an Extraordinary Universe</h3>

            <p>
              Marvel brings together incredible characters, powerful
              stories and unforgettable cinematic experiences.
              Explore a universe where courage, friendship and
              determination create legends.
            </p>

            <p>
              From legendary heroes to extraordinary adventures,
              every story opens the door to a new world.
            </p>

            <a href="#movies" className="secondary-btn">
              DISCOVER MORE
            </a>

          </div>

        </div>

      </section>


      {/* Movies Section */}
      <section className="movies-section" id="movies">

        <div className="section-heading">
          <p>EXPLORE THE COLLECTION</p>
          <h2>ICONIC <span>MARVEL MOVIES</span></h2>
        </div>

        <div className="movie-container">

          <div className="movie-card">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
              alt="Avengers inspired cosmic artwork"
            />
            <div className="movie-info">
              <h3>AVENGERS</h3>
              <p>Earth's mightiest heroes unite.</p>
            </div>
          </div>

          <div className="movie-card">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
              alt="Fantastic cinematic landscape"
            />
            <div className="movie-info">
              <h3>GUARDIANS</h3>
              <p>An adventure beyond the stars.</p>
            </div>
          </div>

          <div className="movie-card">
            <img
              src="https://images.unsplash.com/photo-1519608487953-e999c86e7455"
              alt="Night sky cinematic background"
            />
            <div className="movie-info">
              <h3>MULTIVERSE</h3>
              <p>Explore limitless possibilities.</p>
            </div>
          </div>

        </div>

      </section>


      {/* Banner Section */}
      <section className="banner-section">

        <div className="banner-content">

          <p>ONE UNIVERSE. COUNTLESS STORIES.</p>

          <h2>HEROES ARE MADE<br />NOT BORN.</h2>

          <p>
            Experience the power of imagination and discover
            the stories that inspire generations.
          </p>

          <a href="#top" className="primary-btn">
            BACK TO TOP
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer className="footer">

        <div className="footer-logo">
          MARVEL <span>STUDIOS</span>
        </div>

        <p>
          Bringing extraordinary stories to life.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="copyright">
          © 2026 Marvel Studios Inspired Website. All Rights Reserved.
        </div>

      </footer>

    </>
  );
}


// Custom 404 Page
function NotFound() {

  return (

    <div className="error-page">

      <div className="error-content">

        <h1>404</h1>

        <h2>LOST IN THE MULTIVERSE?</h2>

        <p>
          Even superheroes sometimes take a wrong turn.
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="primary-btn">
          BACK TO HOME
        </Link>

      </div>

    </div>

  );
}


// Main Application
function App() {

  return (

    <div id="top">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<NotFound />} />

        <Route path="/services" element={<NotFound />} />

        <Route path="/contact" element={<NotFound />} />

        <Route path="/login" element={<NotFound />} />

        <Route path="/register" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>

  );

}

export default App;