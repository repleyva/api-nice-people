export const helpHttps = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController(); // si no hay una respuesta del servidor se puede abortar la consulta
    options.signal = controller.signal; // manejador de errores

    options.method = options.method || "GET";
    // si vienen cabeceras entonces mezclalas con las opciones por defecto, sino entonces solo pon las opciones por defecto
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; // si body es false entonces eliminalo

    console.log(options);
    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((error) => error);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
	
  const del = (url, options) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
