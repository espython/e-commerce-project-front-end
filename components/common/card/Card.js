import React from 'react';

export default function Card() {
  return (
    <div className="card mb-3">
      <img
        className="card-img-top"
        style={{ height: '50rem', width: '100%', display: 'block' }}
        src="https://via.placeholder.com/500"
        alt="Card image"
      />
      <div className="card-body text-center">
        <p className="card-text">Stripe Eyelet Cami Fit and Flare Dress</p>
        <p>$21.50</p>
        <a
          href="#"
          className="btn btn-dark"
          style={{ fontSize: '1.6rem', marginTop: '1.6rem' }}
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}
