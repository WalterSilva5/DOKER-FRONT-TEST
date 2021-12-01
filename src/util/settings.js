let url = '';
if (process.env.NODE_ENV === 'production') {
  url = 'https://doker-api.herokuapp.com/api-v1/';
} else {
  url = 'http://localhost/api-v1/';
}

export const serverAdders = url;
