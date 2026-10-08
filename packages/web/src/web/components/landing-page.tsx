import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Phone,
  Menu,
  X,
  Check,
  MapPin,
  Mail,
  Plus,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    image: "villa",
    name: "Villa Orizzonte",
    type: "Nuova costruzione",
    location: "Bologna · 2025",
  },
  {
    image: "residence",
    name: "Residenza Urbana",
    type: "Edilizia residenziale",
    location: "Modena · 2024",
  },
  {
    image: "house",
    name: "Casa Linea",
    type: "Ristrutturazione integrale",
    location: "Bologna · 2025",
  },
  { image: "facade", name: "Palazzo Luce", type: "Riqualificazione", location: "Ferrara · 2024" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inizio"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="Forma, torna all'inizio"
    >
      <svg viewBox="0 0 42 44" aria-hidden="true">
        <path d="M2 42V2h38v10H13v7h21v10H13v13Z" fill="currentColor" />
        <path d="M23 34h11v8H23Z" fill="#f36b2f" />
      </svg>
      <span>
        FORMA<span className="brand-sub">EDILIZIA & COSTRUZIONI</span>
      </span>
    </a>
  );
}

export default function LandingPage() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState<"contact" | "privacy" | number | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (modal !== null) {
      previousFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);
  const jump = () => {
    setMenu(false);
  };
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Logo />
          <nav aria-label="Navigazione principale">
            <a href="#servizi">Servizi</a>
            <a href="#progetti">Progetti</a>
            <a href="#chi-siamo">Chi siamo</a>
          </nav>
          <button className="button orange call" onClick={() => setModal("contact")}>
            <Phone size={15} /> Chiama ora! <ArrowUpRight size={17} />
          </button>
          <button
            className="menu-toggle"
            aria-label={menu ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="mobile-nav" aria-label="Menu mobile">
            <a href="#servizi" onClick={jump}>
              Servizi
            </a>
            <a href="#progetti" onClick={jump}>
              Progetti
            </a>
            <a href="#chi-siamo" onClick={jump}>
              Chi siamo
            </a>
            <a href="#contatti" onClick={jump}>
              Richiedi un preventivo <ArrowUpRight size={18} />
            </a>
          </nav>
        )}
      </header>
      <main>
        <section id="inizio" className="hero">
          <img
            className="hero-photo"
            src="/images/hero.webp"
            alt="Struttura in cemento armato di un edificio in costruzione con gru"
            fetchPriority="high"
            width="2200"
            height="1467"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light">
              <span />
              DAL PROGETTO, ALLA REALTÀ.
            </div>
            <h1>
              Eccellenza costruita
              <br />
              su basi <span>solide.</span>
            </h1>
            <p>
              Costruiamo spazi. Diamo forma alle idee.
              <br />
              Un unico partner, dalla prima pietra all'ultimo dettaglio.
            </p>
            <div className="hero-actions">
              <a className="button outline" href="#progetti">
                I nostri progetti <ArrowUpRight size={18} />
              </a>
              <a className="button dark" href="#contatti">
                Contattaci <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>COMPETENZA. PRECISIONE. CONCRETEZZA.</span>
            <a href="#servizi">
              Scopri Forma <ArrowDown size={17} />
            </a>
            <span className="hero-index">
              01 <span>/ 04</span>
            </span>
          </div>
        </section>
        <section id="servizi" className="services section-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span />
                COSA FACCIAMO
              </div>
              <h2>Un progetto. Tutte le competenze.</h2>
            </div>
            <p>
              Soluzioni complete per costruire, rinnovare
              <br className="desktop-break" /> e dare valore ai tuoi spazi.
            </p>
          </div>
          <article className="service-row">
            <div className="service-copy">
              <span className="service-index">01 / NUOVE COSTRUZIONI</span>
              <h3>
                Le tue idee.
                <br />
                Le nostre fondamenta.
              </h3>
              <p>
                Diamo vita a edifici residenziali e commerciali pensati per durare. Seguiamo ogni
                fase del cantiere con metodo, materiali di qualità e un'attenzione concreta a tempi
                e costi.
              </p>
              <ul>
                <li>
                  <Check />
                  Edilizia residenziale e commerciale
                </li>
                <li>
                  <Check />
                  Gestione completa del cantiere
                </li>
                <li>
                  <Check />
                  Efficienza energetica e sostenibilità
                </li>
              </ul>
              <a href="#contatti" className="button dark compact">
                Leggi di più <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="service-image">
              <img
                src="/images/construction.webp"
                alt="Edificio in cemento armato in costruzione, con gru"
                loading="lazy"
                width="1072"
                height="1600"
              />
              <span className="image-tag">DALLA PRIMA PIETRA.</span>
            </div>
          </article>
          <article className="service-row reverse">
            <div className="service-copy">
              <span className="service-index">02 / RISTRUTTURAZIONI</span>
              <h3>
                Nuova vita,
                <br />
                agli spazi di sempre.
              </h3>
              <p>
                Trasformiamo il potenziale di ogni ambiente in un nuovo modo di viverlo. Dalle
                ristrutturazioni integrali ai singoli interventi, ci prendiamo cura di ogni
                dettaglio, senza lasciare nulla al caso.
              </p>
              <ul>
                <li>
                  <Check />
                  Ristrutturazioni chiavi in mano
                </li>
                <li>
                  <Check />
                  Restauro e riqualificazione
                </li>
                <li>
                  <Check />
                  Finiture e cura del dettaglio
                </li>
              </ul>
              <a href="#contatti" className="button dark compact">
                Leggi di più <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="service-image">
              <img
                src="/images/renovation.webp"
                alt="Professionista al lavoro durante una ristrutturazione di interni"
                loading="lazy"
                width="1069"
                height="1600"
              />
              <span className="image-tag">FINO ALL'ULTIMO DETTAGLIO.</span>
            </div>
          </article>
        </section>
        <section id="chi-siamo" className="about">
          <div className="about-shade" />
          <div className="about-inner">
            <div className="about-heading">
              <div>
                <div className="eyebrow light">
                  <span />
                  LA SOLIDITÀ, IN NUMERI
                </div>
                <h2>Il valore dell'esperienza.</h2>
              </div>
              <p>
                Persone competenti. Impegni mantenuti.
                <br />
                La nostra storia si costruisce ogni giorno.
              </p>
            </div>
            <div className="stats">
              {[
                ["1998", "Anno di fondazione"],
                ["250+", "Progetti completati"],
                ["35", "Professionisti"],
                ["20+", "Partner qualificati"],
              ].map(([n, l], i) => (
                <div className="stat" key={l}>
                  <span className="stat-index">0{i + 1}</span>
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
            <span className="stats-note">Numeri illustrativi per questa landing dimostrativa.</span>
          </div>
        </section>
        <section id="progetti" className="projects">
          <div className="section-heading section-wrap">
            <div>
              <div className="eyebrow">
                <span />
                IL NOSTRO LAVORO, CONCRETAMENTE
              </div>
              <h2>Progetti che parlano per noi.</h2>
            </div>
            <a className="text-link" href="#contatti">
              Il prossimo potrebbe essere il tuo <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <button
                className="project"
                key={p.name}
                onClick={() => setModal(i)}
                aria-label={`Apri ${p.name}`}
              >
                <img
                  src={`/images/${p.image}.webp`}
                  alt={`${p.name}: ${p.type.toLowerCase()}, fotografia architettonica illustrativa`}
                  loading="lazy"
                  width="1400"
                  height="1050"
                />
                <div className="project-caption">
                  <span>
                    <small>{p.type}</small>
                    <strong>{p.name}</strong>
                  </span>
                  <span className="project-plus">
                    <Plus size={22} />
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="project-foot section-wrap">
            <span>Ogni edificio è una promessa mantenuta.</span>
            <span>ARCHITETTURA · FUNZIONALITÀ · DURATA</span>
          </div>
        </section>
        <section id="contatti" className="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <div className="eyebrow light">
                <span />
                PARTIAMO DAL TUO PROGETTO
              </div>
              <h2>
                Le grandi cose
                <br />
                iniziano con una
                <br />
                <span>conversazione.</span>
              </h2>
              <p>
                Hai un'idea o un intervento da realizzare?
                <br />
                Raccontacelo. Troviamo insieme la strada giusta.
              </p>
              <div className="contact-promise">
                <ShieldCheck size={20} />
                <span>Preventivo chiaro. Nessun impegno.</span>
              </div>
            </div>
            <form
              className="quote-form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const phone = String(data.get("phone"));
                if (phone.replace(/\D/g, "").length < 7) {
                  setError("Inserisci un numero di telefono valido (almeno 7 cifre).");
                  setSent(false);
                  return;
                }
                setError("");
                setSent(true);
              }}
            >
              <h3>Richiedi un preventivo</h3>
              <p>Lascia i tuoi dati, penseremo noi al resto.</p>
              <label htmlFor="name">Nome e cognome</label>
              <input
                aria-label="Nome e cognome"
                id="name"
                name="name"
                placeholder="Come ti chiami?"
                autoComplete="name"
                required
                minLength={2}
              />
              <label htmlFor="phone">Telefono</label>
              <input
                aria-label="Telefono"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Il tuo numero di telefono"
                autoComplete="tel"
                required
              />
              <label htmlFor="type">Tipo di intervento</label>
              <select id="type" name="type" defaultValue="" required>
                <option value="" disabled>
                  Seleziona un intervento
                </option>
                <option>Nuova costruzione</option>
                <option>Ristrutturazione</option>
                <option>Restauro e riqualificazione</option>
                <option>Altro intervento</option>
              </select>
              <label className="consent">
                <input type="checkbox" aria-label="Acconsento al trattamento dei dati" required />
                <span>
                  Ho letto l'
                  <button type="button" onClick={() => setModal("privacy")}>
                    informativa privacy
                  </button>{" "}
                  e acconsento al trattamento dei dati.
                </span>
              </label>
              <button className="button orange submit" type="submit">
                Richiedi il tuo preventivo <ArrowUpRight size={20} />
              </button>
              <div className="form-status" aria-live="polite">
                {error && <p className="error">{error}</p>}
                {sent && (
                  <p className="success">
                    <Check size={18} />
                    Demo completata: i dati sono validi. Nessuna richiesta è stata inviata o
                    salvata.
                  </p>
                )}
              </div>
              <small className="demo-form">Modulo dimostrativo · nessun dato viene inviato</small>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-main">
          <div>
            <Logo light />
            <p>
              Costruiamo oggi.
              <br />
              Diamo forma al domani.
            </p>
          </div>
          <div>
            <span className="footer-label">DOVE SIAMO</span>
            <p>
              <MapPin size={16} />
              Via del Cantiere 12
              <br />
              40100 Bologna, Italia
            </p>
            <span className="footer-small">Sede e indirizzo dimostrativi</span>
          </div>
          <div>
            <span className="footer-label">PARLIAMONE</span>
            <button className="footer-contact" onClick={() => setModal("contact")}>
              <Phone size={16} />
              +39 051 XXX XXXX
            </button>
            <p>
              <Mail size={16} />
              info@forma.example.com
            </p>
            <span className="footer-small">Lun – Ven, 8:00 – 18:00 · orari di esempio</span>
          </div>
          <a href="#inizio" className="back-top" aria-label="Torna in alto">
            <ArrowUpRight size={25} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Forma Edilizia S.r.l. · P. IVA: dato dimostrativo</span>
          <span>Azienda, progetti e dati di esempio · fotografie illustrative dal web</span>
          <button onClick={() => setModal("privacy")}>Privacy policy</button>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className={typeof modal === "number" ? "modal project-modal" : "modal"}
        onCancel={() => setModal(null)}
        aria-labelledby="modal-title"
      >
        <button className="modal-close" aria-label="Chiudi finestra" onClick={() => setModal(null)}>
          <X />
        </button>
        {typeof modal === "number" ? (
          <>
            <img src={`/images/${projects[modal]!.image}.webp`} alt={projects[modal]!.name} />
            <div className="modal-content">
              <div className="eyebrow">{projects[modal]!.type}</div>
              <h2 id="modal-title">{projects[modal]!.name}</h2>
              <p>
                {projects[modal]!.location} · Progetto illustrativo, non realizzato da un'azienda
                reale.
              </p>
              <a href="#contatti" className="button dark" onClick={() => setModal(null)}>
                Parliamo del tuo progetto <ArrowRight size={18} />
              </a>
            </div>
          </>
        ) : (
          <div className="modal-content">
            <div className="eyebrow">
              <span />
              {modal === "privacy" ? "TRASPARENZA" : "CONTATTI"}
            </div>
            <h2 id="modal-title">
              {modal === "privacy" ? "La tua privacy." : "Parliamone, con Forma."}
            </h2>
            {modal === "privacy" ? (
              <>
                <p>
                  Questa è una landing page dimostrativa. Nome, telefono e tipo di intervento
                  inseriti nel modulo non vengono trasmessi, salvati in un database o usati per
                  ricontattarti.
                </p>
                <p>
                  La casella di consenso mostra soltanto il comportamento di un modulo reale. Prima
                  di pubblicare un sito operativo, inserire un'informativa completa e i riferimenti
                  del titolare. Le eventuali analisi tecniche della piattaforma sono separate da
                  questo modulo.
                </p>
              </>
            ) : (
              <>
                <p>
                  Forma è un marchio di esempio: il numero visualizzato è un segnaposto e non avvia
                  una chiamata reale.
                </p>
                <p>
                  Puoi provare il modulo preventivo: la compilazione avviene solo nel browser, senza
                  inviare dati.
                </p>
                <a className="button orange" href="#contatti" onClick={() => setModal(null)}>
                  Prova il modulo <ArrowUpRight size={18} />
                </a>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
