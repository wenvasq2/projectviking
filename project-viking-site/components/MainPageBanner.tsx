import Image from 'next/image';

const MainPageBanner: React.FC = () => {
  return (
    <div className="banner">
      <Image
        src={`/images/mainlogo-vikingproject.png`}
        alt="Main Page Banner"
        width={500}
        height={500}
      />
      {/* <div className="banner-content">
        <h1>Welcome to Our Website!</h1>
        <p>Explore our services and products</p>
      </div> */}
    </div>
  );
};

export default MainPageBanner;