import "./Home.css";
import demoVideo from "../assets/demo.mp4";
import toolsImage from "../assets/tools.jpeg";

export default function Home() {
  return (
    <>
      <header className="topbar">
        MICHAEL TOOLS &amp; HARDWARE
      </header>

      <section className="hero">

        <div className="headline">
          <h1>
            Fasten Nails Into Concrete And Steel In Seconds With This
            Mini-Retainer Kit
          </h1>

          <p>
            Complete kit. Strong carry case. Delivered to your door.
          </p>
        </div>

        <div className="video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            src={demoVideo}
          />
        </div>

        <div className="product">
          <img
            src={toolsImage}
            alt="Michael Tools and Hardware"
          />

          <h2>Get Your Full Michael Tools Kit</h2>

          <p className="old-price">₦50,000</p>

          <p className="new-price">₦40,000</p>

          <button className="discount">
            SPECIAL DISCOUNT — NOW ONLY ₦40,000 ORDER NOW
          </button>
        </div>

        {/* WHY CHOOSE US */}

        <div className="why-us">
          <h2>Why You Should Choose Us</h2>

          <div className="reasons">

            <div className="reason">
              <div className="reason-icon">💪</div>
              <h3>Strong &amp; Reliable</h3>
              <p>
                Built with quality materials to handle tough jobs on
                concrete and steel.
              </p>
            </div>

            <div className="reason">
              <div className="reason-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>
                We deliver your tools directly to your doorstep,
                wherever you are.
              </p>
            </div>

            <div className="reason">
              <div className="reason-icon">💰</div>
              <h3>Great Value</h3>
              <p>
                Get a complete professional kit at a special discounted
                price of just ₦40,000.
              </p>
            </div>

            <div className="reason">
              <div className="reason-icon">🧰</div>
              <h3>Complete Kit</h3>
              <p>
                Everything you need comes together in one convenient
                and easy-to-carry kit.
              </p>
            </div>

          </div>
        </div>

        <a className="btn" href="#order">
          ORDER NOW
        </a>

      </section>
    </>
  );
}