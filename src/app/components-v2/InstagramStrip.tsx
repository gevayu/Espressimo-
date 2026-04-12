import imgInsta from "../../imports/HomePage-2/d670e78f571ca73a30b4551798a4660046bdc111.png";

const images = [
  "/picts/instgram/NIM_0576 1.jpg",
  "/picts/instgram/NIM_0638 1.jpg",
  "/picts/instgram/NIM_9795 1.jpg",
  "/picts/instgram/NIM_9817 1.jpg",
  "/picts/instgram/NIM_9834 1.jpg",
  "/picts/instgram/NIM_9879 1.jpg",
  "/picts/instgram/NIM_9919 1.jpg",
  "/picts/instgram/NIM_9975 1.jpg",
  "/picts/instgram/NIM_9982 1.jpg",
  "/picts/instgram/NIM_0437 1.jpg",
  "/picts/instgram/NIM_0462 1.jpg",
  "/picts/instgram/NIM_0516 1.jpg",
  "/picts/instgram/NIM_0527 1.jpg",
];

export function InstagramStrip() {
  return (
    <section className="bg-[#8B3A00] h-[162px] relative overflow-hidden flex items-center">
      <div className="flex-shrink-0 w-[326px] h-full flex items-center justify-center z-10 bg-[#8B3A00] pr-[42px]">
        <a href="https://www.instagram.com/littleampscoffee" target="_blank" rel="noopener noreferrer">
          <img src={imgInsta} alt="אינסטגרם" className="h-[120px] w-auto" />
        </a>
      </div>
      <div className="flex gap-[19.2px] items-center py-5 overflow-hidden">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} alt="" className="w-[121.66px] h-[121.66px] rounded-[3px] object-cover shrink-0" />
        ))}
      </div>
    </section>
  );
}
