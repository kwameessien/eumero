type MarqueeProps = {
  text?: string
}

function Marquee({ text = 'BIRTHDAY SALE 30% OFF SITEWIDE WITH CODE LUCKY3' }: MarqueeProps) {
  const items = Array.from({ length: 4 }, (_, index) => (
    <span key={index} className="font-inria text-sm uppercase tracking-[0.05em]">
      {text}
    </span>
  ))

  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full overflow-hidden whitespace-nowrap bg-[#231D18] py-3 text-white">
      <div className="inline-flex w-max animate-marquee">
        <div className="inline-flex gap-16">{items}</div>
        <div className="inline-flex gap-16">{items}</div>
      </div>
    </div>
  )
}

export default Marquee
