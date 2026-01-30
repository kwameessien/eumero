/**
 * Marquee Component
 * Displays a continuously scrolling promotional banner at the top of the page
 * @param {string} text - The promotional text to display (default: "BIRTHDAY SALE 30% OFF SITEWIDE WITH CODE LUCKY3")
 */
function Marquee({ text = "BIRTHDAY SALE 30% OFF SITEWIDE WITH CODE LUCKY3" }) {
  return (
    // Fixed container at the top of the viewport with muted brown background
    <div className="marquee-container fixed top-0 left-0 right-0 bg-[#231D18] text-white overflow-hidden whitespace-nowrap w-full font-normal py-3 m-0 z-50">
      {/* Scrolling content wrapper with animation applied via CSS */}
      <div className="inline-flex marquee-animate gap-16">
        {/* Multiple text instances create seamless infinite scroll effect */}
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}

export default Marquee;

