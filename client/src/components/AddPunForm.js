import { formSubmitHandler } from '../formSubmitHandler'

const AddPunForm = ({formSubmitHandler}) => {
    return (
        <form name="add-pun-form" onSubmit={formSubmitHandler} className="form">
        <div>
            <label htmlFor="input-name">name</label>
            <input id="input-name"/>
        </div>
        <div>
            <label htmlFor="input-pun">pun</label>
            <input id="input-pun"/>
        </div>
            <input className="btn btn-success" type="submit"/>
        </form>
    )
}

export default AddPunForm;
