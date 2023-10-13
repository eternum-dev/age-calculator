import { getCurrentDate } from './getCurrentDate';
import { getInputBirthDate } from './getInputBirthDate';


let missingDD, missingMM, missingYYYY;

export const ageCalculator = () => {
    //fechas actuales 
    let { currentDD, currentMM, currentYYYY, daysCurrentMonth } = getCurrentDate();
    const { inputDD, inputMM, inputYYYY } = getInputBirthDate();

    // fecha de cumpleaños 
    let birthDD = inputDD.value;
    let birthMM = inputMM.value;
    let birthYYYY = inputYYYY.value;

    
    const defineMonth = () => {
        !(birthMM > currentMM) ?
            (
                missingMM = currentMM - birthMM
            ) :
            (
                missingMM = (currentMM + 12) - birthMM,
                --currentYYYY
            )
    }


    (!(birthDD > currentDD)) ?
        (
            missingDD = currentDD - birthDD,
            defineMonth()
        ) :
        (
            missingDD = (daysCurrentMonth + currentDD) - birthDD - 1,
            --currentMM,
            defineMonth()
        )
    missingYYYY = currentYYYY - birthYYYY;


    return {
        missingDD,
        missingMM,
        missingYYYY
    }
}