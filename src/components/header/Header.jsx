const Header = ({ title, children }) => {
  return (
    <section>
      <h2>
        {title}
        {children}
      </h2>
    </section>
  );
};

export default Header;
