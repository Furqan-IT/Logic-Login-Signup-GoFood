import React from 'react';

const Card = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Support Our Cause</h5>
              <p className="card-text">Your generous donation will help us make a difference.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Donation Amount</label>
                  <input type="number" className="form-control" id="amount" placeholder="Enter amount" step="any" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
                <button type="submit" className="btn btn-primary">Donate Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
