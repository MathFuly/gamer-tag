
const Footer = () => {
const date = new Date();
const year = date.getFullYear();

  return (
    <div className="h-24 flex justify-center items-center flex-col text-dark-gray-300 bg-black bg-opacity-20 mt-10">
      <p>&copy; {year} GamerTag</p>
      <p className="text-xs md:text-sm mt-2 flex flex-wrap justify-center text-center w-[85%] font-semibold italic">This is a portfolio website only, made with React.js, Tailwind and Redux. </p>
    </div>
  );
}

export default Footer