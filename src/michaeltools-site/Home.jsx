import "./Home.css";
import demoVideo from "../assets/demo.mp4";

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

        <a className="btn" href="#order">
          ORDER NOW
        </a>

      </section>
    </>
  );
}