import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const photos = {
  safari: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
  ],
  creta: [
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
  ],
  thar: [
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
  ],
  swift: [
    "https://images.unsplash.com/photo-1549924231-f129b911e442",
    "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa",
    "https://images.unsplash.com/photo-1493238792000-8113da705763",
  ],
  bolero: [
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
  ],
  city: [
    "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  ],
};

const cars = [
  {
    id: "safari",
    name: "Tata Safari XTA+",
    year: "2022",
    price: "₹18.90 L",
    km: "31,420 km",
    fuel: "Diesel",
    trans: "Automatic",
    tag: "Mountain Ready",
    phone: "+919876543210",
    about:
      "Perfect SUV for Ladakh roads. Powerful diesel engine and premium interior.",
  },
  {
    id: "creta",
    name: "Hyundai Creta SX",
    year: "2021",
    price: "₹13.75 L",
    km: "42,100 km",
    fuel: "Petrol",
    trans: "Manual",
    tag: "Cargis Choice",
    phone: "+919876543210",
    about:
      "Comfortable family SUV with excellent reliability and mileage.",
  },
  {
    id: "thar",
    name: "Mahindra Thar LX",
    year: "2022",
    price: "₹15.40 L",
    km: "22,860 km",
    fuel: "Diesel",
    trans: "Manual",
    tag: "4x4",
    phone: "+919876543210",
    about:
      "Built for adventure. Excellent off-road performance for mountain terrain.",
  },
  {
    id: "swift",
    name: "Maruti Swift ZXi",
    year: "2020",
    price: "₹6.35 L",
    km: "38,740 km",
    fuel: "Petrol",
    trans: "Manual",
    tag: "City Smart",
    phone: "+919876543210",
    about:
      "Fuel efficient hatchback, ideal for daily use.",
  },
  {
    id: "bolero",
    name: "Mahindra Bolero Neo",
    year: "2022",
    price: "₹10.60 L",
    km: "29,400 km",
    fuel: "Diesel",
    trans: "Manual",
    tag: "Built Tough",
    phone: "+919876543210",
    about:
      "Rugged and dependable SUV designed for rough roads.",
  },
  {
    id: "city",
    name: "Honda City ZX CVT",
    year: "2021",
    price: "₹12.85 L",
    km: "34,120 km",
    fuel: "Petrol",
    trans: "Automatic",
    tag: "Executive",
    phone: "+919876543210",
    about:
      "Premium sedan with smooth automatic transmission and spacious cabin.",
  },
];

function App() {
  const [active, setActive] = useState(null);
  const [photo, setPhoto] = useState(0);

  const car = cars.find((c) => c.id === active);

  const openCar = (id) => {
    setActive(id);
    setPhoto(0);
  };

  return (
    <main>
      <nav>
        <a className="brand" href="#top">
          <i>c</i> cargis<span>•</span>
        </a>

        <div className="navlinks">
          <a href="#cars">Cars</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Used Cars • Ladakh</p>

          <h1>
            Find Your
            <br />
            <em>Perfect Ride</em>
          </h1>

          <p className="hero-text">
            Trusted used cars in Kargil. Verified vehicles, transparent pricing,
            and direct contact with the owner.
          </p>
        </div>
      </section>

      <section className="inventory" id="cars">
        <div className="section-head">
          <div>
            <p className="eyebrow">Our Collection</p>
            <h2>Available Cars</h2>
          </div>
        </div>

        <div className="grid">
          {cars.map((c) => (
            <article
              className="car"
              key={c.id}
              onClick={() => openCar(c.id)}
            >
              <div className="car-photo">
                <img src={photos[c.id][0]} alt={c.name} />
                <label>{c.tag}</label>
                <button className="round">↗</button>
              </div>

              <div className="car-info">
                <p>
                  {c.year} <span>•</span> {c.km}
                </p>

                <h3>{c.name}</h3>

                <div>
                  <strong>{c.price}</strong>
                  <small>
                    {c.fuel} • {c.trans}
                  </small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <p>📍 Kargil, Ladakh</p>
        <p>☎ +91 9876543210</p>
      </footer>

      {car && (
        <div className="modal" onClick={() => setActive(null)}>
          <div
            className="sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActive(null)}
            >
              ×
            </button>

            <div className="gallery">
              <img
                className="main-img"
                src={photos[car.id][photo]}
                alt={car.name}
              />

              <div className="thumbs">
                {photos[car.id].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setPhoto(index)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="detail">
              <p className="eyebrow">
                {car.tag} • {car.year}
              </p>

              <h2>{car.name}</h2>

              <strong className="price">
                {car.price}
              </strong>

              <div className="quick">
                <span>{car.km}</span>
                <span>{car.fuel}</span>
                <span>{car.trans}</span>
              </div>

              <p className="about">
                {car.about}
              </p>

              <a
                href={`tel:${car.phone}`}
                className="enquire"
                style={{
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Call Owner →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);