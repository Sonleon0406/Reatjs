// luu tru cuc bo 
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};