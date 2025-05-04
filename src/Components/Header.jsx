import Header_Image from "../Assets/header_img.png";

const Header = () => {
  return (
    <div className="container mx-auto py-10 px-5 md:px-10 lg:px-20">
      <div
        className="bg-center bg-cover bg-no-repeat text-white max-w-[650px] md:max-w-[750px] lg:max-w-full h-[200px] md:h-[400px] lg:h-[550px] rounded-2xl flex flex-col items-start p-5 md:p-10 justify-center"
        style={{ backgroundImage: `url(${Header_Image})` }}
      >
        <div className="w-[450px] md:w-[700px] mt-20">
          <h1 className="text-xl md:text-6xl font-semibold leading-0 md:leading-20 mb-5">
            Order Your Favourite Food Here
          </h1>
          <p className="hidden md:block text-[17px] mb-5">
            Experience the convenience of food delivery at your fingertips with
            our app. Order now and enjoy delicious meals delivered straight to
            your door.
          </p>
          <button className="bg-white text-[#49557e] px-5 py-2 rounded-full mt-5 md:mt-5 mb-8 md:mb-0 text-[14px] md:text-[18px] cursor-pointer">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
