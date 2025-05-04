import Play_Store from "../Assets/play_store.png";
import App_Store from "../Assets/app_store.png";
const AppDownload = () => {
  return (
    <div id="Mobile App" className="container mx-auto py-20 px-5 md:px-10 lg:px-20 flex justify-center items-center flex-col">
      <p className="text-[30px] md:text-[40px] font-semibold max-w-[600px] text-center">
        For Better Experience Download Tomato App
      </p>
      <div className="flex flex-col md:flex-row gap-5 mt-8">
        <img src={Play_Store} alt="Play_Store" />
        <img src={App_Store} alt="App_Store" />
      </div>
    </div>
  );
};

export default AppDownload;
