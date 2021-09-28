const AddPunButton = ({ setFormExpanded }) => {
  return (
    <button
      type="button"
      class="btn btn-primary fs-4"
      onClick={() => setFormExpanded(true)}
    >
      Add a Pun!
    </button>
  );
};

export default AddPunButton;