const Navbar = () => {
  return (
    <div className="flex justify-end bg-black opacity-70 w-full">
      <div className="flex justify-evenly items-center gap-8 text-white px-8 py-4">
        <div>About me</div>
        <div>Projects</div>
        <div>Exp</div>
        <div>Contact</div>
        <a
          className="border border-white px-4 py-1 rounded-lg cursor-pointer"
          href=""
          target="_blank"
        >
          Test
        </a>
      </div>
    </div>
  );
};

export default Navbar;
