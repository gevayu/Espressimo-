const logos = [
  { src: "/logos/JURA.png", alt: "Jura" },
  { src: "/logos/LAMARZOCCO.png", alt: "La Marzocco" },
  { src: "/logos/ECM.png", alt: "ECM" },
  { src: "/logos/QUICKMILL.png", alt: "Quick Mill" },
  { src: "/logos/PROFITEC.png", alt: "Profitec" },
  { src: "/logos/KALERM.png", alt: "Kalerm" },
  { src: "/logos/DRCOFFEE.png", alt: "DR Coffee" },
  { src: "/logos/LAPAVONY.png", alt: "La Pavoni" },
  { src: "/logos/LELIT.png", alt: "Lelit" },
  { src: "/logos/Stone.png", alt: "Stone" },
  { src: "/logos/Fiorenzat.png", alt: "Fiorenzato" },
  { src: "/logos/eureka-535311.png", alt: "Eureka" },
  { src: "/logos/Varanini.png", alt: "Varanini" },
  { src: "/logos/Vescovi.png", alt: "Vescovi" },
  { src: "/logos/hausbrandt_logo.png", alt: "Hausbrandt" },
  { src: "/logos/Caffe Diemme.png", alt: "Caffe Diemme" },
  { src: "/logos/Caffe_Vero_Logo.png", alt: "Caffe Vero" },
  { src: "/logos/bristot.png", alt: "Bristot" },
  { src: "/logos/SAN MARTINO.png", alt: "San Martino" },
  { src: "/logos/garibaldi logo.png", alt: "Garibaldi" },
  { src: "/logos/Molinari.png", alt: "Molinari" },
  { src: "/logos/rancilio.png", alt: "Rancilio" },
  { src: "/logos/nuova-simonelli.png", alt: "Nuova Simonelli" },
];

const ITEM_W = 160;
const ITEM_GAP = 48;
const ITEM_STEP = ITEM_W + ITEM_GAP;
const SET_W = logos.length * ITEM_STEP;

// 4 copies so there's always content filling the screen
const repeated = [...logos, ...logos, ...logos, ...logos];

export function BrandsStrip() {
  return (
    <section
      style={{
        background: "#fff9f2",
        borderBottom: "1px solid #e6dad4",
        height: "162px",
        position: "relative",
        overflow: "hidden",
        direction: "ltr",
      }}
    >
      <style>{`
        @keyframes brandsScroll {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${SET_W}px); }
        }
        .brands-track {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          animation: brandsScroll ${Math.round(SET_W / 50)}s linear infinite;
          will-change: transform;
          white-space: nowrap;
        }
        .brands-logo-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${ITEM_W}px;
          height: 80px;
          margin-right: ${ITEM_GAP}px;
          flex-shrink: 0;
        }
        .brands-logo-item img {
          width: ${ITEM_W}px;
          height: 80px;
          object-fit: contain;
          filter: grayscale(1) opacity(0.35);
          transition: filter 0.35s ease;
        }
        .brands-logo-item:hover img {
          filter: grayscale(0) opacity(1);
        }
      `}</style>

      <div className="brands-track">
        {repeated.map((logo, i) => (
          <div key={i} className="brands-logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
