import { default as formSubmitHandler } from '../formSubmitHandler'

const AddPunForm = ({setPuns}) => {
    return (
        <form name="add-pun-form" onSubmit={e => formSubmitHandler(e, setPuns)} className="form">
        <div>
            <label htmlFor="name">name</label>
            <input id="name"/>
        </div>
        <div>
            <label htmlFor="pun">pun</label>
            <input id="pun"/>
        </div>
            <input className="btn btn-success" type="submit"/>
        </form>
    )
}

export default AddPunForm;
