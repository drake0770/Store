export const emptyField =(value)=>{
    if(value) return undefined;
    return 'Поле не може бути порожнім';
}

export const maxLength = (size) => (value) => {
    if(value.length > size) return `Текст не може бути довшим за ${size} символів`;
}

export const number =(value)=>{
    if(isNaN(value)) return 'Введіть вірний номер телефону';
}