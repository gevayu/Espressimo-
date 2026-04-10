import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgProduct1 from "../../imports/HomePage-2/c4ddfc79e83dc897d83bd6f6b5bd8736e0443c8b.png";
import imgProduct2 from "../../imports/HomePage-2/ff758012fd54baa6da64fa09677021c061155068.png";
import imgProduct3 from "../../imports/HomePage-2/6d9971dbb3c025bd05863240e166f7f9d57783ad.png";
import imgProduct4 from "../../imports/HomePage-2/94feac15829742af7fc558a884255224b5fb99f8.png";
import imgProduct5 from "../../imports/HomePage-2/c2f56925e3228dcc4d59957fc5254f39fc6d264e.png";
import imgNew from "../../imports/HomePage-2/fb4da651b73dc31fd1720c107098d19fe15476de.png";
import imgNew1 from "../../imports/HomePage-2/375c991d73ad54d8e3307b2e9d0a60907cc844db.png";
import imgMediumSweetness from "../../imports/HomePage-2/5730c1341e9c10c7f02b1aa958dc88ef00a3154d.png";
import imgHighComplexity from "../../imports/HomePage-2/a0e6a9680b12df53c9401823970ce4585a611c71.png";
import imgLowComplexity from "../../imports/HomePage-2/64563b2f80e05aa5e49add8ed003f47b94a348d1.png";
import imgExtraHigh from "../../imports/HomePage-2/5501eca44f15ca47af051e07ca18ac8e8c359677.png";
import imgMediumRoast from "../../imports/HomePage-2/5d9eed72d6cd2f3ee69ab66814d0fdf5a3771aa2.png";
import imgDarkRoast from "../../imports/HomePage-2/1a8b1d20168d6225387af367325c86a58f2129c4.png";
import imgTheHits from "../../imports/HomePage-2/4143ea06385574702a24ebea3229201c7ef9aae8.png";
import imgRoastersPicks from "../../imports/HomePage-2/fe652db37a161f02940e313a61232869d427588e.png";

interface CoffeeProduct {
  name: string;
  price: string;
  origin: string;
  notes: string;
  roast: string;
  roastImg: string;
  image: string;
  knobs: { img: string; label: string }[];
  quickViewColor: string;
  quickViewTextColor: string;
  badge?: string;
}

const products: CoffeeProduct[] = [
  {
    name: "תערובת חברים",
    price: "החל מ-$20.00",
    origin: "קולומביה, אתיופיה",
    notes: "טעמים: קרמל, הדרים, שוקולד חלב",
    roast: "קלייה בינונית",
    roastImg: imgMediumRoast,
    image: imgProduct1,
    knobs: [
      { img: imgMediumSweetness, label: "מתיקות" },
      { img: imgExtraHigh, label: "חומציות" },
      { img: imgLowComplexity, label: "מורכבות" },
    ],
    quickViewColor: "#89b4ca",
    quickViewTextColor: "#522c25",
  },
  {
    name: "אל תוך החלל",
    price: "החל מ-$20.00",
    origin: "הונדורס",
    notes: "טעמים: פירות יער מבושלים, יין חם, קקאו",
    roast: "קלייה כהה",
    roastImg: imgDarkRoast,
    image: imgProduct2,
    knobs: [
      { img: imgMediumSweetness, label: "מתיקות" },
      { img: imgLowComplexity, label: "חומציות" },
      { img: imgHighComplexity, label: "מורכבות" },
    ],
    quickViewColor: "#c03001",
    quickViewTextColor: "#fff9f2",
  },
  {
    name: "בומבה 11",
    price: "החל מ-$26.00",
    origin: "בורונדי",
    notes: "טעמים: ברגמוט, משמש, ליים",
    roast: "קלייה בינונית",
    roastImg: imgMediumRoast,
    image: imgProduct3,
    knobs: [
      { img: imgHighComplexity, label: "מתיקות" },
      { img: imgMediumSweetness, label: "חומציות" },
      { img: imgExtraHigh, label: "מורכבות" },
    ],
    quickViewColor: "#c46500",
    quickViewTextColor: "#fff9f2",
    badge: imgNew,
  },
  {
    name: "ישעיהו פרננדז",
    price: "החל מ-$23.00",
    origin: "הונדורס",
    notes: "טעמים: תפוח ירוק, לימון, קרמל",
    roast: "קלייה בינונית",
    roastImg: imgMediumRoast,
    image: imgProduct4,
    knobs: [
      { img: imgMediumSweetness, label: "מתיקות" },
      { img: imgHighComplexity, label: "חומציות" },
      { img: imgMediumSweetness, label: "מורכבות" },
    ],
    quickViewColor: "#89b4ca",
    quickViewTextColor: "#522c25",
    badge: imgNew1,
  },
  {
    name: "שונדיסה נטורל",
    price: "החל מ-$22.00",
    origin: "אתיופיה",
    notes: "טעמים: מייפל, שוקולד, פנקייק אוכמניות",
    roast: "קלייה בינונית",
    roastImg: imgMediumRoast,
    image: imgProduct5,
    knobs: [
      { img: imgExtraHigh, label: "מתיקות" },
      { img: imgLowComplexity, label: "חומציות" },
      { img: imgMediumSweetness, label: "מורכבות" },
    ],
    quickViewColor: "#febf6f",
    quickViewTextColor: "#522c25",
  },
];

function ProductCard({ product }: { product: CoffeeProduct }) {
  return (
    <div className="shrink-0 w-[calc(20%-1px)]  min-w-[280px]  border-r border-[#e6dad4] first:border-r-0">
      <div className="p-9 flex flex-col gap-[30px]">
        {/* Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.badge && (
            <img src={product.badge} alt="חדש" className="absolute top-2 right-2 w-[92px] h-[96px] rounded" />
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <a href="#" className="text-[#522c25] text-[19.2px] leading-[20px] capitalize font-['Dialect_PM',sans-serif]">
              {product.name}
            </a>
            <span className="text-[#522c25] text-[13.7px] font-['Roboto_Mono',monospace]">
              {product.price}
            </span>
          </div>

          <p className="text-[#522c25] text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70">
            {product.origin}
          </p>

          {/* Knobs */}
          <div className="flex gap-2.5 pt-2">
            {product.knobs.map((knob, i) => (
              <div key={i} className="flex flex-col items-center opacity-70">
                <img src={knob.img} alt={knob.label} className="w-[25px] h-[21px]" />
                <span className="text-[#522c25] text-[6.5px] tracking-[0.35px] uppercase font-['Dialect_PM',sans-serif] pt-1 pb-1.5">
                  {knob.label}
                </span>
              </div>
            ))}
          </div>

          {/* Notes */}
          <p className="text-[#522c25] text-[12px] font-['Inclusive_Sans',sans-serif] opacity-70 pt-1">
            {product.notes}
          </p>

          {/* Roast */}
          <div className="pt-0.5">
            <img src={product.roastImg} alt={product.roast} className="w-full h-[5.77px]" />
            <p className="text-[#522c25] text-[12px] font-['Inclusive_Sans',sans-serif] opacity-70 pt-1 pb-3">
              {product.roast}
            </p>
          </div>

          {/* Quick View */}
          <div
            className="inline-flex items-center justify-center px-1.5 py-1 rounded-sm text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] w-fit"
            style={{ backgroundColor: product.quickViewColor, color: product.quickViewTextColor }}
          >
            תצוגה מהירה
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="shrink-0 w-[371px]">
      <div className="rounded-lg overflow-hidden relative aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-6 right-6 left-6">
          <h3 className="text-white text-[19.2px] leading-[20px] font-['Dialect_PM',sans-serif] capitalize">{title}</h3>
          <p className="text-white/80 text-[13px] leading-[14.3px] font-['Dialect_PM',sans-serif] mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCoffee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "right" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-start overflow-x-auto scrollbar-hide" ref={scrollRef}>
        {/* Collection cards */}
        <div className="shrink-0 p-9 flex flex-col gap-6">
          <CollectionCard
            title="הלהיטים"
            description="לפעמים פשוט צריך לשחק את הלהיטים. אנחנו שומרים עליהם..."
            image={imgTheHits}
          />
          <CollectionCard
            title="בחירות הקולה"
            description="הבחירות האישיות של הקולה שלנו..."
            image={imgRoastersPicks}
          />
        </div>

        {/* Product cards */}
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
