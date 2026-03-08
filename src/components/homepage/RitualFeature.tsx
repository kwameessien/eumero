function RitualFeature() {
  return (
    <section className="border-y border-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 md:flex-row md:divide-x md:divide-black/20">
        <div className="relative flex w-full items-center justify-center py-10 md:w-[42%] md:py-12">
          <img
            src="/assets/eumero-product-1.png"
            alt="Eumero product"
            className="h-auto w-full max-w-[120px] object-contain md:max-w-[160px] md:-translate-x-24"
          />
        </div>
        <div className="relative flex w-full items-center border-t border-black/20 py-10 md:w-[58%] md:border-t-0 md:py-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-transparent" />
          <div className="relative flex w-full flex-col gap-6 md:pl-10">
            <h2 className="font-inria text-[100px] font-bold leading-none text-black">ritual before results</h2>
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
