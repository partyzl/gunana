import { default as formSubmitHandler } from "../formSubmitHandler";

{
  /* <div class="mb-3">
  <label for="exampleFormControlInput1">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div> */
}

const AddPunForm = ({ setPuns, setFormExpanded }) => {
  return (
    <div class="mb-3">
      <form
        name="add-pun-form"
        onSubmit={(e) => formSubmitHandler(e, setPuns, setFormExpanded)}
      >
        <div className="pb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" id="name" />
        </div>
        <div className="pb-3">
          <label htmlFor="pun">Pun</label>
          <input className="form-control" id="pun" />
        </div>
        <input className="btn btn-light fs-4" type="submit" />
      </form>
    </div>
  );
};

export default AddPunForm;
