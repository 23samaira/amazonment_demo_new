import logo from "./logo.svg";
import "./App.css";
import img1 from "/Users/priyalgupta/Desktop/amazonment/my-store/src/images/1.jpeg";
import img2 from "/Users/priyalgupta/Desktop/amazonment/my-store/src/images/2.jpeg";
import img3 from "/Users/priyalgupta/Desktop/amazonment/my-store/src/images/3.jpeg";
import img4 from "/Users/priyalgupta/Desktop/amazonment/my-store/src/images/4.jpeg";
function App() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <header className="bg-primary text-white py-2 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Store</h1>
        <nav className="flex space-x-4">
          <button className="btn btn-ghost btn-sm">Categories</button>
          <button className="btn btn-ghost btn-sm">Deals</button>
          <button className="btn btn-ghost btn-sm">What's New</button>
          <button className="btn btn-ghost btn-sm">Delivery</button>
        </nav>
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search Product"
            className="input input-bordered input-sm"
          />
          <button className="btn btn-ghost btn-sm">Account</button>
          <button className="btn btn-ghost btn-sm">Cart</button>
        </div>
      </header>

      {/* Banner 
      <section className="bg-secondary py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Grab Up to 50% Off On Selected Headphones
        </h2>
        <button className="btn btn-primary mt-4">Buy Now</button>
      </section>*/}

      {/* Filters 
      <div className="container mx-auto my-8 flex flex-wrap gap-4 justify-center">
        <button className="btn btn-outline btn-sm">Headphone Type</button>
        <button className="btn btn-outline btn-sm">Price</button>
        <button className="btn btn-outline btn-sm">Review</button>
        <button className="btn btn-outline btn-sm">Color</button>
        <button className="btn btn-outline btn-sm">Material</button>
        <button className="btn btn-outline btn-sm">Offer</button>
        <button className="btn btn-outline btn-sm">All Filters</button>
      </div> */}

      {/* Products */}
      <section className="container mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="card shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Wireless Earbuds"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Wireless Earbuds, IPX8</h3>
            <p>Organic Cotton, fairtrade certified</p>
            <p className="font-bold text-lg">₹40,000</p>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure>
            <img
              src={img2}
              alt="AirPods Max"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">AirPods Max</h3>
            <p>A perfect balance of high-fidelity audio</p>
            <p className="font-bold text-lg">₹80,000</p>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Bose BT Earphones"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Bose BT Earphones</h3>
            <p>Table with air purifier, stained veneer/black</p>
            <p className="font-bold text-lg">₹10,000</p>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure>
            <img
              src={img4}
              alt="VIVEFOX Headphones"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">VIVEFOX Headphones</h3>
            <p>Wired Stereo Headsets with Mic</p>
            <p className="font-bold text-lg">₹5,000</p>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
