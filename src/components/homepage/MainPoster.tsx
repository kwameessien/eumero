type MainPosterProps = {
  imageSrc?: string
  alt?: string
}

function MainPoster({ imageSrc = '/assets/Byredo-AlwaysOnMakeup.png', alt = 'Byredo' }: MainPosterProps) {
  return (
    <div className="mt-[-20px] w-full">
      <img src={imageSrc} alt={alt} className="h-auto w-full object-cover" />
    </div>
  )
}

export default MainPoster
