// utils.js


export const currentAgeForBirthYear = birthYear => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};
