import { useEffect, useRef, useState, type FormEvent } from "react";
import "./index.css";
import { Bouquet } from "./Bouquet";
import { CursorBloom } from "./CursorBloom";
import arrangement01 from "./images/arrangement-01.jpg";
import arrangement02 from "./images/arrangement-02.jpg";
import arrangement03 from "./images/arrangement-03.jpg";

function useReveals() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Field({
  label,
  placeholder,
  type = "text",
  full = false,
  textarea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  full?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={`field${full ? " full" : ""}${focused ? " focused" : ""}`}>
      <label>{label}</label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

function InquiryForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <Field label="Your name" placeholder="Anna Nováková" />
      <Field label="For" placeholder="A wedding in June" />
      <Field label="Electronic mail" placeholder="anna@studio.cz" type="email" />
      <Field label="Date" placeholder="14 · VI · 2026" />
      <Field
        label="A note"
        placeholder="Tell us a little about the room, the day, what you hope for…"
        full
        textarea
      />
      <div className="submit-row">
        <span className="fine">No card required · just words</span>
        <button className="btn" type="submit">
          {sent ? (
            <>Sent · with thanks&nbsp;✓</>
          ) : (
            <>
              Send the letter <span className="arrow" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export function App() {
  useReveals();

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="mark">
          Adamova
          <span className="b">Blooms</span>
        </div>
        <nav>
          <a href="#atelier">Atelier</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#services">Services</a>
          <a href="#contact">Inquire</a>
        </nav>
        <div className="meta">
          <span>Prague</span>
          <span>·</span>
          <span>MMXXV</span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-inner">
              {/* LEFT */}
              <div className="hero-left">
                <div>
                  <div className="eyebrow-row">
                    <span className="dot" />
                    <span className="label-sm">Issue Nº 01 — Spring / Summer</span>
                    <span className="hairline" />
                    <span className="label-sm">Volume I</span>
                  </div>

                  <h1 className="wordmark display">
                    Adamova
                    <span className="b">Blooms — Florist · Prague</span>
                  </h1>

                  <p className="hero-lede">
                    A small atelier of <em>wild, sculptural</em> arrangements — stems
                    gathered, grasses left long, every bouquet built one stem at a time.
                    By Adela Adamova, in Prague.
                  </p>
                </div>

                <div className="hero-foot">
                  <div className="cell">
                    <div className="k">Discipline</div>
                    <div className="v">Floral design</div>
                  </div>
                  <div className="cell">
                    <div className="k">Studio</div>
                    <div className="v">Praha 7, Letná</div>
                  </div>
                  <div className="cell">
                    <div className="k">Founded</div>
                    <div className="v">Anno 2025</div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hero-right">
                <div className="plate-tag">
                  <span className="num display">Nº 01</span>
                  Frontispiece
                  <br />
                  Hand-drawn · ink
                </div>

                <div className="bouquet-stage">
                  <Bouquet />
                </div>

                <div className="hero-right-foot">
                  <span className="label-sm">Drawn from the Studio Notebook</span>
                  <span className="label-sm">Adamova · Praha · MMXXV</span>
                </div>
              </div>
            </div>

            <div className="scroll-cue">
              <span>Scroll</span>
              <span className="bar" />
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="manifesto" id="atelier">
          <div className="wrap">
            <div className="manifesto-grid">
              <div className="col-label">
                <span className="label">Chapter I</span>
                <div className="meta">
                  On wildness, on stems
                  <br />
                  left to lean their own way,
                  <br />
                  and a small atelier in Letná.
                </div>
              </div>

              <div className="manifesto-text reveal">
                We build bouquets the way one might write a letter — slowly, by hand,
                with rooms for <span className="accent">air</span> between the lines.
                Grasses are left long. Stems lean where they want to lean. Nothing is
                forced into round.
              </div>

              <div className="manifesto-aside reveal">
                <p>
                  Adamova Blooms is the studio of Adela Adamova, a florist working in
                  Prague's Letná quarter. Her arrangements draw on the Czech wildflower
                  meadow and the Japanese ikebana tradition in equal measure.
                </p>
                <p>
                  Each piece is composed once, never repeated. Stems are sourced weekly
                  from small growers around Bohemia.
                </p>
                <div className="signature">— Adela</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOOKBOOK */}
        <section className="gallery" id="lookbook">
          <div className="wrap">
            <header className="section-head">
              <div className="roman">Nº 02</div>
              <h2 className="title">
                Lookbook,
                <br />
                Spring
              </h2>
              <div className="right-meta">
                Six plates
                <br />
                Photography · A. Adamova
                <br />
                Praha — MMXXV
              </div>
            </header>

            <div className="plate-grid">
              <article className="plate plate-tall reveal">
                <div className="frame">
                  <img src={arrangement01} alt="Spring still life" loading="lazy" />
                </div>
                <div className="caption">
                  <div className="left">
                    <span className="num">Plate I.</span>
                    <span className="name">Three Vessels, a Still Life</span>
                  </div>
                  <div className="meta">
                    Peony · Calla
                    <br />
                    Tulip · Freesia
                  </div>
                </div>
              </article>

              <article className="plate plate-wide reveal">
                <div className="frame">
                  <img src={arrangement02} alt="Chrysanthemum study" loading="lazy" />
                </div>
                <div className="caption">
                  <div className="left">
                    <span className="num">Plate II.</span>
                    <span className="name">A Study in Panicum &amp; Clematis</span>
                  </div>
                  <div className="meta">
                    Chrysanthemum · Clematis
                    <br />
                    Panicum · Silk Ribbon
                  </div>
                </div>
              </article>

              <article className="plate plate-half reveal">
                <div className="frame placeholder-frame" style={{ aspectRatio: "4 / 4.6" }}>
                  <span>[ Photograph · Bridal piece ]</span>
                </div>
                <div className="caption">
                  <div className="left">
                    <span className="num">Plate III.</span>
                    <span className="name">Bridal — Pale Garden</span>
                  </div>
                  <div className="meta">
                    Garden Rose · Ranunculus
                    <br />
                    Sweet Pea · Astrantia
                  </div>
                </div>
              </article>

              <article className="plate plate-half reveal">
                <div className="frame">
                  <img src={arrangement03} alt="Eucalyptus and clematis vase" loading="lazy" />
                </div>
                <div className="caption">
                  <div className="left">
                    <span className="num">Plate IV.</span>
                    <span className="name">Eucalyptus, Clematis, Twine</span>
                  </div>
                  <div className="meta">
                    Clematis · Eucalyptus
                    <br />
                    Chrysanthemum · Smoke Bush
                  </div>
                </div>
              </article>

              <article className="plate plate-full reveal">
                <div className="frame placeholder-frame" style={{ aspectRatio: "12 / 5" }}>
                  <span>[ Editorial wide · table installation ]</span>
                </div>
                <div className="caption">
                  <div className="left">
                    <span className="num">Plate V.</span>
                    <span className="name">Long Table — Letná Supper</span>
                  </div>
                  <div className="meta">
                    Mixed seasonal · 4 m run
                    <br />
                    Private commission · May
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="wrap">
            <header className="section-head">
              <div className="roman">Nº 03</div>
              <h2 className="title">Services</h2>
              <div className="right-meta">
                By appointment
                <br />
                Praha 7 — atelier visits
                <br />
                Mon · Wed · Fri
              </div>
            </header>

            <div className="services-grid">
              <div className="service">
                <div className="svc-num">
                  <span className="small">i.</span>01
                </div>
                <h3>Weddings</h3>
                <p className="svc-desc">
                  Sculptural bridal bouquets, ceremony arches, and long-table
                  arrangements composed to the specific room and season. Begins with a
                  consultation in the atelier.
                </p>
                <ul>
                  <li>
                    <span className="i">a.</span>
                    <span>Bridal bouquet</span>
                    <span className="px">From 4 800 Kč</span>
                  </li>
                  <li>
                    <span className="i">b.</span>
                    <span>Boutonnières (each)</span>
                    <span className="px">From 380 Kč</span>
                  </li>
                  <li>
                    <span className="i">c.</span>
                    <span>Ceremony arch</span>
                    <span className="px">From 28 000 Kč</span>
                  </li>
                  <li>
                    <span className="i">d.</span>
                    <span>Long-table run (per metre)</span>
                    <span className="px">From 6 400 Kč</span>
                  </li>
                </ul>
              </div>

              <div className="service">
                <div className="svc-num">
                  <span className="small">ii.</span>02
                </div>
                <h3>Events</h3>
                <p className="svc-desc">
                  Dinners, openings, editorial shoots. Installations built on site, with
                  stems sourced the same week. We travel within Czechia and accept
                  commissions in Vienna and Berlin.
                </p>
                <ul>
                  <li>
                    <span className="i">a.</span>
                    <span>Table centrepieces</span>
                    <span className="px">From 2 200 Kč</span>
                  </li>
                  <li>
                    <span className="i">b.</span>
                    <span>Editorial styling (day)</span>
                    <span className="px">From 18 000 Kč</span>
                  </li>
                  <li>
                    <span className="i">c.</span>
                    <span>Window &amp; retail</span>
                    <span className="px">By quote</span>
                  </li>
                  <li>
                    <span className="i">d.</span>
                    <span>Hanging installation</span>
                    <span className="px">By quote</span>
                  </li>
                </ul>
              </div>

              <div className="service">
                <div className="svc-num">
                  <span className="small">iii.</span>03
                </div>
                <h3>Subscriptions</h3>
                <p className="svc-desc">
                  A small weekly or fortnightly bouquet, hand-delivered in Prague.
                  Composed from what is freshest that morning — no two are alike.
                  Discreet, no card, no fanfare.
                </p>
                <ul>
                  <li>
                    <span className="i">a.</span>
                    <span>The Petite — weekly</span>
                    <span className="px">980 Kč / wk</span>
                  </li>
                  <li>
                    <span className="i">b.</span>
                    <span>The Studio — weekly</span>
                    <span className="px">1 680 Kč / wk</span>
                  </li>
                  <li>
                    <span className="i">c.</span>
                    <span>The Atelier — fortnightly</span>
                    <span className="px">3 400 Kč</span>
                  </li>
                  <li>
                    <span className="i">d.</span>
                    <span>Gift card (8 weeks)</span>
                    <span className="px">From 8 600 Kč</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-grid">
              <div className="contact-lhs">
                <span className="label">Nº 04 — Inquire</span>
                <h2>
                  Let us begin
                  <br />
                  <em>a correspondence.</em>
                </h2>
                <p className="blurb">
                  Weddings, events, commissions, the occasional press request — we read
                  every note ourselves. A reply, usually within two days.
                </p>

                <div className="contact-details">
                  <div>
                    <div className="k">Atelier</div>
                    <div className="v">
                      Letohradská 14
                      <br />
                      170 00 Praha 7
                    </div>
                  </div>
                  <div>
                    <div className="k">Hours</div>
                    <div className="v">
                      By appointment
                      <br />
                      Mon · Wed · Fri
                    </div>
                  </div>
                  <div>
                    <div className="k">Write</div>
                    <div className="v small">studio@adamova.blooms</div>
                  </div>
                  <div>
                    <div className="k">Telephone</div>
                    <div className="v small">+420 778 042 116</div>
                  </div>
                </div>
              </div>

              <InquiryForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div>Adamova Blooms · Florist · Praha 7</div>
          <div className="center">A&nbsp;·&nbsp;A</div>
          <div className="right">© MMXXV · All rights reserved · Photography by the studio</div>
        </div>
      </footer>

      <CursorBloom />
    </>
  );
}

export default App;
