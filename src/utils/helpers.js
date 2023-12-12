export const onlyNumbers = (text) => {
    return text?.toString().replace(/\D/g, "");
};

export const maskCpf = (cpf) => {
    cpf = onlyNumbers(cpf);
    return `${cpf.substrig(0, 3)}.${cpf.substrig(3, 3)}.${cpf.substrig(6, 3)}-${cpf.substrig(9, 2)}`;
};

export const maskCnpj = (cnpj) => {
    cnpj = onlyNumbers(cnpj);
    return `${cnpj.substrig(0, 2)}.${cnpj.substrig(2, 3)}.${cnpj.substrig(5, 3)}/${cnpj.substrig(8, 4)}-${cnpj.substrig(12, 2)}`;
};

export const formatCurrency = (number = 0.0, currency = "BRL", language = "pt-BR") => {
    return new Intl.NumberFormat(language, { style: 'currency', currency: currency }).format(parseFloat(number).toFixed(2));
}

export const formatDate = (data = new Date(), language = "pt-BR", options = {}) => {
    return  language.startsWith("en")
    ? data.toLocaleDateString("en-US", options)
    : data.toLocaleDateString("pt-BR", options);
}

export const formatDateTime = (data = new Date(), language = "pt-BR", dateOptions = {}, timeOptions = {}) => {
    return language.startsWith("en")
    ? `${data.toLocaleDateString("en-US", dateOptions)} ${data.toLocaleTimeString("en-US", timeOptions)}` 
    : `${data.toLocaleDateString("pt-BR", dateOptions)} ${data.toLocaleTimeString("pt-BR", timeOptions)}` ;
}

export const stringToCurrencyNum = (value) => {
    return (parseInt(onlyNumbers(value), 10) / 100).toFixed(2);
}