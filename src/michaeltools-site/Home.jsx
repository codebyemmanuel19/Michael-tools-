import "./Home.css";
import demoVideo from "../assets/demo.mp4";
import toolsImage from "../assets/tools.jpeg";
import toolsImage2 from "../assets/tools-1.jpeg";

// Change your prices here only
const OLD_PRICE = 50000;
const NEW_PRICE = 35000;
const naira = (n) => "₦" + n.toLocaleString();

export default function Home() {
  return (
    <>
      <header className="topbar">MICHAEL TOOLS &amp; HARDWARE</header>

      <section className="hero">
        <div className="headline">
          <h1>
            Fasten Nails Into Concrete And Steel In Seconds With This
            Mini-Retainer Kit
          </h1>
          <p>Complete kit. Strong carry case. Delivered to your door.</p>
        </div>

        <div className="video-frame">
          <video controls playsInline preload="metadata" src={demoVideo} />
        </div>

        <div className="product">
          <div className="gallery">
            <img src={toolsImage} alt="Mini-Retainer kit" />
            <img src={toolsImage2} alt="Mini-Retainer kit in use" />
          </div>

          <h2>Get Your Complete Mini-Retainer Kit Today</h2>
          <p className="product-text">
            We deliver to every part of Nigeria, with free delivery and
            payment on delivery. Order today and get 100 pieces of nails free.
          </p>

          <div className="badges">
            <span>✔ Free Delivery</span>
            <span>✔ Pay On Delivery</span>
            <span>✔ Nationwide</span>
            <span>🎁 100 Nails Free</span>
          </div>

          <p className="old-price">{naira(OLD_PRICE)}</p>
          <p className="new-price">{naira(NEW_PRICE)}</p>
          <p className="save">Special discount. Limited stock.</p>

          <a className="btn" href="#order">ORDER NOW</a>
        </div>

        <div className="why-us">
          <h2>Why Choose Us</h2>
          <div className="reasons">
            <div className="reason">
              <div className="reason-icon">💪</div>
              <h3>Strong &amp; Reliable</h3>
              <p>Built with quality materials to handle tough jobs on concrete and steel.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>We deliver straight to your doorstep, wherever you are in Nigeria.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">💰</div>
              <h3>Great Value</h3>
              <p>A complete professional kit at a special price of {naira(NEW_PRICE)}.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">🧰</div>
              <h3>Complete Kit</h3>
              <p>Everything you need in one strong, easy-to-carry case.</p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}