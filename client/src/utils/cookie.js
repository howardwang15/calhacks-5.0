export const getCookies = () => {
    const { cookie } = document;
    const cookieObject = {};
    cookie.split(';').map((cookieItem) => {
        const [key, value] = cookieItem.trim().split('=');
        cookieObject[key] = value;
    });
    return cookieObject;
};

export const setCookie = (key, value, path = '/', age = 31536000) => {
    document.cookie = `${key}=${value};path=${path};max-age=${age}`;
};
