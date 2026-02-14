function Section({ id, customGradient, classes, children }) {
  return (
    <section
      id={id}
      className={
        "px-6 py-24 " +
        (customGradient ? "bg-custom-gradient" : "") +
        " " +
        classes
      }
    >
      {children}
    </section>
  );
}

export default Section;
