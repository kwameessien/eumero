import Image from 'next/image'

/** Hero image on the home page */
const EUMERO_MAIN_1 = '/assets/eumero-main-1.png'

type MainPosterProps = {
  alt?: string
}

function MainPoster({ alt = 'Eumero' }: MainPosterProps) {
  return (
    <div className="mt-[-12px] w-full">
      <Image
        src={EUMERO_MAIN_1}
        alt={alt}
        width={1802}
        height={1000}
        sizes="100vw"
        priority
        className="h-auto w-full object-cover"
      />
    </div>
  )
}

export default MainPoster
