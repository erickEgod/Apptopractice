import { useState } from "react";


export const useForm = (currentForm) => {
    const [formState, setFormState] = useState(currentForm)

    const onInputChange = (event) => {
        const { id, value } = event.target;
        setFormState({
            ...formState,
            [id]: value, //esto hace que la key se modifique según el id en este caso
        })
    };

    return {
        formState,
        onInputChange,
        setFormState,
    }
}
