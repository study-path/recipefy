const Footer = () => {
  return (
    <footer className="bg-gray-300 py-4 text-center  ">
      <p className="text-gray-600 font-bubblegum text-2xl">
        © {new Date().getFullYear()} Recipi
        <span className="text-lime-500">fy</span> App
      </p>
    </footer>
  );
};
export default Footer;
