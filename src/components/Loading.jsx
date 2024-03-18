const Loading = () => {
  return (
    <div
      dir="ltr"
      className="w-full bg-white h-screen flex justify-center items-center text-5xl"
    >
      <div className="animate-spin border-4 border-r-transparent border-green-500 w-28 h-28 rounded-full flex justify-center items-center">
        <div className="animate-spin border-4 border-r-transparent border-green-500 w-16 h-16 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
