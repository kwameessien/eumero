function Marquee({ text = "BIRTHDAY SALE 30% OFF SITEWIDE WITH CODE LUCKY3" }) {
  return (
    <div className="marquee-container fixed top-0 left-0 right-0 bg-[#AAA397] text-white overflow-hidden whitespace-nowrap w-full font-normal py-3 m-0 z-50">
      <div className="inline-flex marquee-animate gap-16">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}

export default Marquee;

