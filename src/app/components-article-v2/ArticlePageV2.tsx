import { Fragment, useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router";
import {
  Calendar, Clock, User, Share2, ChevronLeft, Package, Wind, Flame, Phone,
  Check, X, Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "../components-v2/Header";
import { Footer } from "../components-v2/Footer";
import { FloatingActions } from "../components-v2/FloatingActions";
import { ScrollReveal } from "../components/ScrollReveal";
import { CategoryProductCard } from "../components-category-v2/CategoryProductCard";
import { products } from "../components-category-v2/categoryData";
import { getArticle, type Block } from "../data/articles";

const tipIcons: Record<string, LucideIcon> = { Calendar, Clock, Package, Wind, Flame };

/** Render **double asterisk** spans as <strong>. */
function withBold(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "p":
      return <p key={i}>{withBold(b.text)}</p>;
    case "quote":
      return <blockquote key={i}>{b.text}</blockquote>;
    case "figure":
      return (
        <figure key={i}>
          <img src={b.src} alt={b.caption ?? ""} />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case "list":
      return (
        <ul key={i} className="checklist">
          {b.items.map((it, j) => <li key={j}>{withBold(it)}</li>)}
        </ul>
      );
    case "prosCons":
      return (
        <div key={i} className="not-prose grid sm:grid-cols-2 gap-4 my-7">
          <div className="bg-[#f1f7f1] border border-[#cfe3cf] rounded-xl p-5">
            <p className="text-[#2e7d32] text-[20px] font-['Dialect_PM',sans-serif] font-bold mb-3">יתרונות</p>
            <ul className="flex flex-col gap-2.5">
              {b.pros.map((p, j) => (
                <li key={j} className="flex items-start gap-2 text-[#3a4a3a] text-[18px] font-['Dialect_PM',sans-serif] leading-[1.5]">
                  <Check size={18} className="text-[#2e7d32] shrink-0 mt-1" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f6ede3] border border-[#e6dad4] rounded-xl p-5">
            <p className="text-[#8B3A00] text-[20px] font-['Dialect_PM',sans-serif] font-bold mb-3">חסרונות</p>
            <ul className="flex flex-col gap-2.5">
              {b.cons.map((c, j) => (
                <li key={j} className="flex items-start gap-2 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] leading-[1.5] opacity-80">
                  <X size={18} className="text-[#8B3A00] shrink-0 mt-1" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "callout":
      return (
        <div key={i} className="not-prose flex gap-3 bg-white border border-[#e6dad4] rounded-xl p-5 my-6">
          <Lightbulb size={22} className="text-[#c46500] shrink-0 mt-1" />
          <div className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] leading-[1.6]">
            {b.title && <strong className="font-bold">{b.title}. </strong>}
            {b.text}
          </div>
        </div>
      );
    case "cards":
      return (
        <div
          key={i}
          className={`not-prose grid gap-5 my-8 ${b.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {b.cards.map((c, j) => (
            <div key={j} className="bg-[#f6ede3] border border-[#e6dad4] rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[#8B3A00] text-[28px] font-['Dialect_PM',sans-serif] font-bold leading-none">{c.title}</span>
                {c.badge && (
                  <span
                    className="text-white text-[14px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full"
                    style={{ backgroundColor: c.badgeColor ?? "#8B3A00" }}
                  >
                    {c.badge}
                  </span>
                )}
              </div>
              {c.tagline && <span className="text-[#c46500] text-[19px] font-['Dialect_PM',sans-serif] font-bold">{c.tagline}</span>}
              <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-75 leading-[1.7]">{c.text}</span>
            </div>
          ))}
        </div>
      );
    case "tips":
      return (
        <div key={i} className="not-prose grid sm:grid-cols-2 gap-4 my-8">
          {b.tips.map((t, j) => {
            const Icon = tipIcons[t.icon] ?? Lightbulb;
            return (
              <div key={j} className="bg-white border border-[#e6dad4] rounded-xl p-5 flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] font-bold">
                  <span className="w-9 h-9 rounded-lg bg-[#f6ede3] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#c46500]" strokeWidth={1.7} />
                  </span>
                  {t.title}
                </span>
                <span className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-70 leading-[1.6]">{t.desc}</span>
              </div>
            );
          })}
        </div>
      );
    case "ctaLink":
      return (
        <a
          key={i}
          href={b.href}
          className="not-prose inline-flex items-center gap-1 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[19px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-6 py-3 rounded-lg transition-colors my-4"
        >
          {b.label} <ChevronLeft size={17} />
        </a>
      );
    default:
      return null;
  }
}

export function ArticlePageV2() {
  const { slug } = useParams();
  const article = getArticle(slug);

  // Group blocks into sections, one per h2 (for scroll-spy + TOC).
  const groups: { id: string; toc: string; blocks: Block[] }[] = [];
  for (const b of article.blocks) {
    if (b.type === "h2") {
      groups.push({ id: b.id, toc: b.toc ?? b.text, blocks: [b] });
    } else if (groups.length) {
      groups[groups.length - 1].blocks.push(b);
    }
  }
  const toc = groups.map((g) => ({ id: g.id, label: g.toc }));

  const [active, setActive] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    groups.forEach((g) => {
      const el = document.getElementById(g.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article.slug]);

  const related = products.slice(0, 3);
  const { cta } = article;

  return (
    <div className="min-h-screen bg-[#fff9f2]" key={article.slug}>
      <Header />

      {/* Breadcrumb */}
      <div
        dir="rtl"
        className="border-b border-[#e6dad4] px-12 py-3 flex items-center gap-2 text-[18px] font-['Dialect_PM',sans-serif] text-[#522c25]"
      >
        <a href="/v2" className="opacity-50 hover:opacity-100 transition-opacity">דף הבית</a>
        <span className="opacity-30">›</span>
        <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">מגזין</a>
        <span className="opacity-30">›</span>
        <span className="font-bold">{article.title}</span>
      </div>

      {/* Article hero */}
      <header dir="rtl" className="border-b border-[#e6dad4] bg-[#f6ede3]">
        <div className="px-12 py-14 max-w-[1000px]">
          <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
            {article.eyebrow}
          </span>
          <h1 className="text-[#522c25] text-[64px] leading-[1.06] font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em] mt-3">
            {article.title}
          </h1>
          <p className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.5] mt-4">
            {article.subtitle}
          </p>

          {/* Meta */}
          <div className="flex items-center flex-wrap gap-x-7 gap-y-3 mt-7 text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-70">
            <span className="flex items-center gap-2"><User size={17} className="text-[#c46500]" /> {article.author}</span>
            <span className="flex items-center gap-2"><Calendar size={17} className="text-[#c46500]" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock size={17} className="text-[#c46500]" /> {article.readTime}</span>
            <button className="flex items-center gap-2 hover:text-[#8B3A00] transition-colors"><Share2 size={17} className="text-[#c46500]" /> שיתוף</button>
          </div>
        </div>

        {/* Hero image */}
        <div className="aspect-[21/8] overflow-hidden border-t border-[#e6dad4]">
          <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Body: TOC + content */}
      <main dir="rtl" className="px-12 py-14 flex gap-12 items-start">
        {/* TOC */}
        <aside className="w-[260px] shrink-0 sticky top-[92px] self-start hidden lg:block">
          <p className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] tracking-[0.14em] uppercase opacity-50 mb-4">
            בעמוד זה
          </p>
          <nav className="flex flex-col border-r-2 border-[#e6dad4]">
            {toc.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`-mr-0.5 border-r-2 pr-4 py-2 text-[19px] font-['Dialect_PM',sans-serif] transition-all ${
                  active === s.id
                    ? "border-[#c46500] text-[#8B3A00] font-bold"
                    : "border-transparent text-[#522c25] opacity-60 hover:opacity-100 hover:text-[#8B3A00]"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="/v2/category"
            className="mt-8 flex items-center justify-center gap-1 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[18px] font-['Dialect_PM',sans-serif] tracking-[0.04em] py-3 rounded-lg transition-colors"
          >
            לחנות הקפה <ChevronLeft size={16} />
          </a>
        </aside>

        {/* Article content */}
        <article className="flex-1 min-w-0 max-w-[760px] article-body">
          {groups.map((g) => (
            <section id={g.id} key={g.id}>
              {g.blocks.map((b, i) => renderBlock(b, i))}
            </section>
          ))}

          {/* Author box */}
          <div className="not-prose mt-12 flex items-center gap-4 bg-[#f6ede3] border border-[#e6dad4] rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#8B3A00] text-white flex items-center justify-center text-[28px] font-['Dialect_PM',sans-serif] font-bold shrink-0">
              א
            </div>
            <div>
              <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold">{article.author}</p>
              <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-65 leading-snug">
                25 שנות ניסיון במכונות קפה, פולים ותחזוקה. כאן כדי לשדך לכם את הקפה המושלם.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* CTA band */}
      <ScrollReveal>
        <section dir="rtl" className="px-12 py-16 bg-[#522c25] text-center">
          <h2 className="text-[#fff9f2] text-[44px] leading-[1.1] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] max-w-[820px] mx-auto">
            {cta.title}
          </h2>
          <p className="text-[#fff9f2] text-[22px] font-['Dialect_PM',sans-serif] opacity-70 mt-4 max-w-[780px] mx-auto leading-[1.5]">
            {cta.text}
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <a
              href={cta.primaryHref}
              target={cta.primaryHref.startsWith("http") ? "_blank" : undefined}
              rel={cta.primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 bg-[#c46500] hover:bg-[#a34500] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg transition-colors"
            >
              <Phone size={20} /> {cta.primaryLabel}
            </a>
            <a
              href={cta.secondaryHref}
              className="border-2 border-[#fff9f2]/40 text-[#fff9f2] text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg hover:bg-[#fff9f2]/10 transition-colors"
            >
              {cta.secondaryLabel}
            </a>
          </div>
          {cta.tagline && (
            <p className="text-[#c46500] text-[22px] font-['Dialect_PM',sans-serif] font-bold mt-7">{cta.tagline}</p>
          )}
        </section>
      </ScrollReveal>

      {/* Related machines */}
      <ScrollReveal>
        <section dir="rtl" className="border-t border-[#e6dad4] bg-[#f6ede3] px-12 py-14">
          <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mb-2">
            {article.relatedTitle}
          </h2>
          <p className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-55 mb-9">
            {article.relatedSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <CategoryProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Footer />
      <FloatingActions />

      {/* Article typography */}
      <style>{`
        .article-body h2 {
          color: #522c25;
          font-family: 'Dialect PM', sans-serif;
          font-weight: 700;
          font-size: 36px;
          line-height: 1.2;
          letter-spacing: 0.02em;
          margin-top: 48px;
          margin-bottom: 16px;
        }
        .article-body section:first-child h2 { margin-top: 0; }
        .article-body p {
          color: #522c25;
          font-family: 'Dialect PM', sans-serif;
          font-size: 21px;
          line-height: 1.75;
          opacity: 0.82;
          margin-bottom: 18px;
        }
        .article-body strong { font-weight: 700; opacity: 1; color: #522c25; }
        .article-body figure { margin: 36px 0; }
        .article-body figure img {
          width: 100%;
          border-radius: 16px;
          border: 1px solid #e6dad4;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
        .article-body figcaption {
          color: #522c25;
          font-family: 'Dialect PM', sans-serif;
          font-size: 16px;
          opacity: 0.5;
          text-align: center;
          margin-top: 10px;
        }
        .article-body blockquote {
          border-right: 4px solid #c46500;
          background: #f6ede3;
          border-radius: 0 12px 12px 0;
          padding: 20px 24px;
          margin: 28px 0;
          color: #8B3A00;
          font-family: 'Dialect PM', sans-serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.45;
        }
        .article-body .checklist { list-style: none; padding: 0; margin: 18px 0; }
        .article-body .checklist li {
          position: relative;
          padding-right: 32px;
          margin-bottom: 12px;
          color: #522c25;
          font-family: 'Dialect PM', sans-serif;
          font-size: 20px;
          line-height: 1.5;
          opacity: 0.85;
        }
        .article-body .checklist li::before {
          content: "✓";
          position: absolute;
          right: 0;
          top: 0;
          color: #fff;
          background: #8B3A00;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
