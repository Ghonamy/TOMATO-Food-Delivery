import Logo from "../Assets/logo.png";
import Facebook_Icon from "../Assets/facebook_icon.png";
import LinkedIn_Icon from "../Assets/linkedin_icon.png";
import Twitter_Icon from "../Assets/twitter_icon.png";
const Footer = () => {
  const Icons = [Facebook_Icon, LinkedIn_Icon, Twitter_Icon];
  return (
    <div className="bg-[#323232]">
      <div className="container mx-auto pt-16 pb-5 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row gap-y-10 justify-between">
          <div className="flex flex-col">
            <img
              src={Logo}
              alt="Logo_Icon"
              className="w-[200px] h-[35px] mb-5"
            />
            <p className="text-[#D9D9D9] text-[15px] md:text-[18px] max-w-[550px]">
              Welcome to Tomato, your ultimate solution for fast and reliable
              food ordering and delivery! Our application is designed to connect
              food enthusiasts with their favorite restaurants and provide a
              seamless ordering experience. With Tomato, you can explore a wide
              variety of cuisines, customize your orders, and enjoy fast
              deliveries right to your doorstep.
            </p>
            <div className="flex items-center mt-5">
              {Icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`Icon_${index}`}
                  className="w-[40px] h-[40px] cursor-pointer mr-3"
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-white text-[20px] md:text-[27px] font-semibold mb-3">
              COMPANY
            </h2>
            <ul className="text-[#D9D9D9] text-[18px] flex flex-col gap-3">
              <li className="cursor-pointer hover:text-white duration-300">
                Home
              </li>
              <li className="cursor-pointer hover:text-white duration-300">
                About Us
              </li>
              <li className="cursor-pointer hover:text-white duration-300">
                Delivery
              </li>
              <li className="cursor-pointer hover:text-white duration-300">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-[20px] md:text-[27px] font-semibold mb-3">
              GET IN TOUCH
            </h2>
            <p className="text-[#D9D9D9] text-[18px] mb-3">+0123456789</p>
            <p className="text-[#D9D9D9] text-[18px]">
              ghonamyebrahim@gmail.com
            </p>
          </div>
        </div>
        <hr className="bg-[#e2e2e2] h-[2px] border-0 rounded-3xl mt-8" />
        <div>
          <p className="text-[#D9D9D9] text-[15px] md:text-[18px] text-center mt-5">
            © 2025 Tomato. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
