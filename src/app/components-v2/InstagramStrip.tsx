import imgInsta from "../../imports/HomePage-2/d670e78f571ca73a30b4551798a4660046bdc111.png";
import img1 from "../../imports/HomePage-2/940e64aff2fc926edea4492ac733ad48914b541f.png";
import img2 from "../../imports/HomePage-2/6effc3fb6650eacd382630565869f2faba222ab8.png";
import img3 from "../../imports/HomePage-2/5efd02b0bfbf194178bbd31b3535eba22ddc3ad2.png";
import img4 from "../../imports/HomePage-2/0990008955e4acd2a6f50a4004c447432b431f8d.png";
import img5 from "../../imports/HomePage-2/68abf46d59c3d739f8a504df1c1ac150e6f92a73.png";
import img6 from "../../imports/HomePage-2/4ff3155fe397754c9c05d765070e25269d6d8e4d.png";
import img7 from "../../imports/HomePage-2/ea024b010947cbd7111275de7a6fc1444ed2d48f.png";
import img8 from "../../imports/HomePage-2/36946ccb94b8fb9404c2be823c2c7147c29488da.png";
import img9 from "../../imports/HomePage-2/12858db20f190fac5ba9097f9e0fbd30387a7990.png";
import img10 from "../../imports/HomePage-2/ea2c9c3d6b980afd02b9de9d2e0819251cb041b1.png";
import img11 from "../../imports/HomePage-2/9929d831064bf2bb6b69cd343248b4bc2a2989a9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export function InstagramStrip() {
  return (
    <section className="bg-[#c03001] h-[162px] relative overflow-hidden flex items-center">
      <div className="flex-shrink-0 w-[326px] h-full flex items-center justify-center z-10 bg-[#c03001] pr-[42px]">
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
