export default function Modal({ active, setActive, children }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal active" : "modal"}
    >
      {/* So that the modal window does not close when the content block is clicked - stopPropagation */}
      <div
        className={active ? "content active" : "content"}
        onClick={(event) => event.stopPropagation()}
      >
        {/* To make a component reusable */}
        {children}
      </div>
    </div>
  );
}
