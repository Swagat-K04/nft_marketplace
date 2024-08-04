const Banner = ({ name, childStyles, parentStyles }) => (
  <div className={`relative w-full flex items-center overflow-hidden nft-gradient ${parentStyles}`}>
    <p className={`font-bold text-5xl font-poppins leading-70 ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 white-bg rounded-full -top-9 -left-16" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 white-bg rounded-full -bottom-24 -right-14" />
  </div>
);

export default Banner;
