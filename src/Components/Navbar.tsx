const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div className="flex justify-evenly items-center gap-8 text-white p-8">
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
