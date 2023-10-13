
/**
 * 
 * @param {HTMLInputElement} input

 */
export const errorDanger = (input, error) => {
    //obtenemos el contenedor padre de el input y el label 
    const wrapper = input.closest('.form__input-wrapper');
    const lbl = wrapper.querySelector('.form__lbl');

    const changeToDanger = (input, errorMessage) => {
        //verificar si errorMessaga existía previamente
        const existingErrorMsg = wrapper.querySelector('.errorMessage');
        if (existingErrorMsg) {
            existingErrorMsg.remove();
        }
        // crear mensaje de error 
        const htmlErrorMsg = document.createElement('p');
        htmlErrorMsg.classList.add('errorMessage');
        htmlErrorMsg.innerText = errorMessage;

        lbl.classList.add('form__lbl--danger');
        input.classList.add('form__input--danger');

        wrapper.append(htmlErrorMsg);
    }

    const hideDanger = (input) => {
        const htmlErrorMsg = wrapper.querySelector('.errorMessage');

        lbl.classList.remove('form__lbl--danger');
        input.classList.remove('form__input--danger');

        if (htmlErrorMsg) {
            htmlErrorMsg.remove();
        }
    }

    changeToDanger(input, error);
    setTimeout(() => {
        hideDanger(input)
    }, 3000);
}