function RitualFeature() {
  return (
    <section className="border-y border-black/20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch px-6 md:grid-cols-[0.42fr_0.58fr] md:divide-x md:divide-black/20">
        <div className="relative flex items-center justify-center py-10 md:py-12">
          <span className="bubble bubble-lg bubble-accent absolute left-[20%] top-[14%]" />
          <img
            src="/assets/eumero-product-1.png"
            alt="Eumero product"
            className="h-auto w-full max-w-[120px] object-contain md:max-w-[160px] md:-translate-x-24"
          />
        </div>
        <div className="relative flex items-center border-t border-black/20 py-10 md:border-t-0 md:py-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-transparent" />
          <div className="relative space-y-6 md:pl-10">
            <h2 className="font-inria text-[100px] font-bold leading-none text-black">Ritual before results</h2>
            <button className="border border-black/70 px-6 py-3 text-xs uppercase tracking-[0.32em] text-black transition-colors hover:bg-black hover:text-white">
              shop root
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RitualFeature
