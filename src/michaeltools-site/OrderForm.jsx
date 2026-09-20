import { useState } from "react";
import "./OrderForm.css";

// FormSubmit string (hides the client's Gmail)
const FORM_ID = "a631ee88e0cf9d5ef98680a231d68351";

// Developer credit at the bottom of the page
const DEV_NUMBER = "";
const DEV_DISPLAY = "";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    address: "",
  });
  const [status, setStatus] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Order: ${form.name}`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Phone: form.phone,
          "State/City": form.state,
          Address: form.address,
        }),
      });

      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", phone: "", state: "", address: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="order" id="order">
        <h2>Place Your Order</h2>
        <p className="order-sub">
          Fill the form below. Pay on delivery, and delivery is free.
        </p>

        <p className="order-warning">
          PLEASE ONLY ORDER IF YOU WILL BE AVAILABLE FOR DELIVERY AND YOU HAVE
          THE CASH WITH YOU!
        </p>

        {status === "sent" && (
          <p className="order-thanks">
            Thank you! Your order has been received. We will call you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="order-error">Something went wrong. Please try again.</p>
        )}

        <form onSubmit={submit}>
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={change} required />

          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="080..."
            value={form.phone}
            onChange={change}
            required
          />

          <label>State / City</label>
          <input name="state" value={form.state} onChange={change} required />

          <label>Delivery Address</label>
          <textarea
            name="address"
            rows="3"
            value={form.address}
            onChange={change}
            required
          />

          <button
            type="submit"
            className="order-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "SENDING..." : "SEND MY ORDER"}
          </button>
        </form>
      </div>

      <footer className="dev-credit">
        {" "}
        <a
          href={`https://wa.me/${DEV_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          {DEV_DISPLAY}
        </a>
      </footer>
    </>
  );
}