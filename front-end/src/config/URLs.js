const host = '127.0.0.1';

export const dataUrls = {
    url: (data) => `http://${host}:8898/${data}`,
    selectData: (data, id) => `http://${host}:8898/${data}/${id}`,
};

export const login = {
    url: `http://${host}:8898/login`,
};
