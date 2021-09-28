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
      <form name="add-pun-form" onSubmit={(e) => formSubmitHandler(e, setPuns, setFormExpanded)}>
        <div class="pb-3">
          <label class="form-label" htmlFor="name">
            Name
          </label>
          <input class="form-control" id="name" />
        </div>
        <div class="pb-3">
          <label htmlFor="pun">Pun</label>
          <input class="form-control" id="pun" />
        </div>
        <input className="btn btn-light fs-4" type="submit" />
      </form>
    </div>
  );
};

export default AddPunForm;
