import { useState } from "react";
import "./OrderForm.css";

// Customers' orders go to this WhatsApp number (country code, no + or spaces)
const WHATSAPP = "2349027090880";

// Developer credit at the bottom of the page
const DEV_NUMBER = "2349027090880";
const DEV_DISPLAY = "0902 709 0880";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    address: "",
  });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg =
      "NEW ORDER: Mini-Retainer Kit\n" +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `State/City: ${form.state}\n` +
      `Address: ${form.address}`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="order" id="order">
        <h2>Place Your Order</h2>
        <p className="order-sub">
          Fill the form below. Pay on delivery, and delivery is free.
        </p>

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

          <button type="submit" className="order-btn">
            SEND MY ORDER
          </button>
        </form>
      </div>

      <footer className="dev-credit">
        Developed by{" "}
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