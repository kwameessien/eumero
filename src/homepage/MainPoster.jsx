import byredoImage from '../assets/Byredo-AlwaysOnMakeup.png'

function MainPoster({ imageSrc, alt = "Byredo" }) {
  return (
    <div className="w-full mt-[-20px]">
      <img 
        src={imageSrc || byredoImage} 
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default MainPoster;

