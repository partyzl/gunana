import { formSubmitHandler } from '../formSubmitHandler'

const AddPunForm = ({formSubmitHandler}) => {
    return (
        <form name="add-pun-form" onSubmit={formSubmitHandler}>
            <label htmlFor="input-name">name</label>
            <input id="input-name"/>
            <label htmlFor="input-pun">pun</label>
            <input id="input-pun"/>
        </form>
    )
}

export default AddPunForm;
