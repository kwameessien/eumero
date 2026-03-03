type MainPosterProps = {
  imageSrc?: string
  alt?: string
}

function MainPoster({ imageSrc = '/assets/eumero-main-1.png', alt = 'Eumero' }: MainPosterProps) {
  return (
    <div className="mt-[-12px] w-full">
      <img src={imageSrc} alt={alt} className="h-auto w-full object-cover" />
    </div>
  )
}

export default MainPoster
