import { ageCalculator } from '../use-cases/ageCalculator';
import { getCurrentDate } from '../use-cases/getCurrentDate';
import { getInputBirthDate } from '../use-cases/getInputBirthDate';
import { errorDanger } from '../error/errorDanger';
import './render-content.css';


let DD = '--',
    MM = '--',
    YYYY = '--';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderContent = (element) => {
    element.innerHTML = `
        <div class="content__wrapper">
            <span class="content__span">${DD}</span>
            <p class="content__text">days</p>
        </div>
        <div class="content__wrapper">
            <span class="content__span">${MM}</span>
            <p class="content__text">months</p>
        </div>
        <div class="content__wrapper">
            <span class="content__span">${YYYY}</span>
            <p class="content__text">years</p>
        </div>
    `

    const form = document.querySelector('.form');
    const validator = (inputDD, inputMM, inputYYYY) => {

        // usando los inputs se obtiene la cantidad días máximos del mes y año ingresado
        const maxDayMonth = (new Date(inputYYYY.value, inputMM.value, 0)).getDate();
        //año actual
        const { currentYYYY } = getCurrentDate();

        let flag = true;
        if (!inputDD.value || !inputMM.value || !inputYYYY.value) {
            errorDanger(inputDD, `this field is require`);
            errorDanger(inputMM, `this field is require`);
            errorDanger(inputYYYY, `this field is require`);
            flag = false
            return flag;
        }
        if (inputDD.value < 0 || inputDD.value > maxDayMonth || inputDD.value > 31) {
            errorDanger(inputDD, `Must be a valid day`);
            flag = false;
        }
        if (inputMM.value < 1 || inputMM.value > 12) {
            errorDanger(inputMM, 'Must be a valid Month')
            flag = false;
        }
        if (inputYYYY.value < 1 || inputYYYY.value >= currentYYYY) {
            errorDanger(inputYYYY, 'Must be in the past')
            flag = false;
        }

        return flag;
    };

    form.addEventListener('submit', event => {
        event.preventDefault();

        const { inputDD, inputMM, inputYYYY } = getInputBirthDate();
        const isValid = validator(inputDD, inputMM, inputYYYY);

        if (!isValid) {
            DD = '--';
            MM = '--';
            YYYY = '--';
            
            renderContent(element);
            return;
        }

        const { missingDD, missingMM, missingYYYY } = ageCalculator();

        DD = missingDD;
        MM = missingMM;
        YYYY = missingYYYY;
        renderContent(element);
    });
}
