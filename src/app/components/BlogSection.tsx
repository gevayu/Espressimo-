import imgBlog1 from "../../imports/HomePage-2/d7e01b4f47354bb8307bb9018474263e006d688f.png";
import imgBlog2 from "../../imports/HomePage-2/46931757ae5fad9490cf4473745c4dc35bdc8510.png";
import imgBlog3 from "../../imports/HomePage-2/81e1ec119936031c68b3b1eb7cc865682cdb87ae.png";
import imgBlog4 from "../../imports/HomePage-2/e04f30c65706796347b2eac2ae790f53049714f4.png";
import imgBlog5 from "../../imports/HomePage-2/31b26ec72fbedd17f5dccf485a3aa86824a74b6f.png";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  action: string;
}

const posts: BlogPost[] = [
  {
    image: imgBlog1,
    title: "סיפור הקפה מבורונדי",
    date: "10 במרץ, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog2,
    title: "הכירו את היצרן",
    date: "25 בפברואר, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog3,
    title: "פלייליסט סתיו וחורף בספוטיפיי",
    date: "15 בנובמבר, 2025",
    action: "האזינו עכשיו",
  },
  {
    image: imgBlog4,
    title: "עקבו אחרינו בספוטיפיי",
    date: "1 באוקטובר, 2025",
    action: "האזינו עכשיו",
  },
  {
    image: imgBlog5,
    title: "למה האתר החדש?",
    date: "20 בספטמבר, 2025",
    action: "קראו עוד",
  },
];

export function BlogSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9">
        <h2 className="text-[38px] leading-[41px] tracking-[-4px] font-['Inter',sans-serif] mb-8">
          <span className="text-[#c46500]">לוח קהילה:</span>{" "}
          <span className="text-[#522c25]">חדשות, אירועים ועוד</span>
        </h2>
      </div>
      <div className="flex overflow-x-auto">
        {posts.map((post, i) => (
          <div key={i} className="shrink-0 w-[20%] min-w-[280px] border-l border-[#e6dad4] p-6 first:border-l-0">
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={post.image} alt={post.title} className="w-full aspect-[4/3] object-cover" />
            </div>
            <p className="text-[#522c25] text-[10px] tracking-[0.6px] uppercase font-['Inter',sans-serif] opacity-60 mb-2">
              {post.date}
            </p>
            <h3 className="text-[#522c25] text-[19.2px] leading-[20px] tracking-[-2px] font-['Inter',sans-serif] mb-3">
              {post.title}
            </h3>
            <a href="#" className="text-[#522c25] text-[10px] tracking-[0.6px] uppercase font-['Inter',sans-serif] underline">
              {post.action}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
