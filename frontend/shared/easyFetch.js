import querystringify from "querystringify";

/**
 * A wrapper around fetch that automatically converts
 * everything to JSON.
 *
 * If a body is present on the config object, we automatically
 * change the method to POST.
 *
 * Pass a query string object with the `params` key on the config
 * object.
 *
 * We automatically append the csrf token to all requests.
 *
 * If a server response is not valid JSON, we set the `data` key on the
 * response to null. You can check the raw content on `text`.
 */

export default async function easyFetch(
  endpoint,
  { headers, params, body, ...customConfig } = {}
) {
  const config = {
    method: "GET",
    headers: { ...defaultHeaders(), headers },
    body: body ? JSON.stringify(body) : null,
    ...customConfig,
  };
  const query = params ? querystringify.stringify(params, true) : "";
  const response = await window.fetch(`${endpoint}${query}`, config);

  const result = {
    status: response.status,
    headers: response.headers,
    ...(await parseResponse(response)),
  };

  if (!response.ok) throw result;

  return result;
}

function defaultHeaders() {
  return {
    "X-CSRF-Token": getCsrfToken(),
    "Content-Type": "application/json",
  };
}

async function parseResponse(response) {
  const text = await response.text();
  const json = parseJson(text);

  return { data: json, text };
}

function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function getCsrfToken() {
  const element = document.getElementsByName("csrf-token");

  if (!element || !element[0]) {
    // eslint-disable-next-line no-console
    console.warn("Can't find the csrf-token on the page!");

    return null;
  }

  return element[0].content;
}
