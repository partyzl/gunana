const AddPunButton = ({ setFormExpanded }) => {
  return (
    <button
      type="button"
      className="btn btn-light fs-4 "
      onClick={() => setFormExpanded(true)}
    >
      Add a Pun!
    </button>
  );
};

export default AddPunButton;
