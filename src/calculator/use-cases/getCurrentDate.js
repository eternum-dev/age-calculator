export const getCurrentDate = () => {
    
    
    const currentDate = new Date();

    // separamos los días, mes y año
    const currentDD = currentDate.getDate();
    const currentMM = currentDate.getMonth() + 1;
    const currentYYYY = currentDate.getFullYear();

    // obtenemos los días totales de el mes actual
    const daysCurrentMonth = ( new Date(currentYYYY, currentMM, 0) ).getDate();
   
    return {
        currentDD,
        currentMM,
        currentYYYY,
        daysCurrentMonth
    }
}