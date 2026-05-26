import type { Product } from "../data/products";

export function StoryBlock({ product }: { product: Product }) {
  const { story } = product;
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-stretch">
        {/* Image */}
        <div className="w-[45%] shrink-0 bg-[#e8d9ce] overflow-hidden relative">
          <img
            src={story.image}
            alt={`${product.brand} story`}
            className="w-full h-full object-contain mix-blend-multiply p-16"
          />
          {/* Brand logo — bottom left */}
          <div className="absolute bottom-8 left-8">
            <img src={story.brandLogo} alt={product.brand} className="h-[100px] w-auto opacity-15" />
          </div>
          {/* Year badge */}
          <div className="absolute bottom-10 right-10 text-right">
            <span className="text-[#8B3A00] text-[100px] font-['Dialect_PM',sans-serif] font-bold leading-none opacity-15 select-none">
              {story.year}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 px-16 py-16 flex flex-col justify-center gap-7 border-r border-[#e6dad4]">
          <span className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] tracking-[0.15em] uppercase opacity-80">
            {story.eyebrow}
          </span>

          <h2 className="text-[#522c25] text-[44px] leading-[1.15] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">
            {story.title}
          </h2>

          <p className="text-[#522c25] text-[20px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-70">
            {story.p1}
          </p>

          <p className="text-[#522c25] text-[20px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-70">
            {story.p2}
          </p>

          <div className="grid grid-cols-3 gap-0 border border-[#e6dad4] rounded-2xl overflow-hidden mt-2">
            {story.stats.map((stat, i) => (
              <div key={i} className={`px-6 py-5 text-center ${i > 0 ? "border-r border-[#e6dad4]" : ""}`}>
                <p className="text-[#8B3A00] text-[34px] font-['Dialect_PM',sans-serif] font-bold leading-none">{stat.num}</p>
                <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-55 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#" className="w-fit flex items-center gap-2 border border-[#522c25]/25 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] px-5 py-2.5 rounded-lg hover:border-[#8B3A00] hover:text-[#8B3A00] hover:bg-[#f6ede3] transition-all">
            עוד על המותג ←
          </a>
        </div>
      </div>
    </section>
  );
}
