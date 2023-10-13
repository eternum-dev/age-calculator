let inputDD, inputMM, inputYYYY;

export const getInputBirthDate = () => {

    const form = document.querySelector('.form');

    inputDD = form.querySelector('[name="day"]');
    inputMM = form.querySelector('[name="month"]');
    inputYYYY = form.querySelector('[name="year"]');


    return {
        inputDD,
        inputMM,
        inputYYYY
    }

}