import { HOST, API_HOST } from './config';
import { ApiFactory } from './utils/ApiFactory';

const API = new ApiFactory({
  apiUrl: HOST,
  hostUrl: HOST,
  withCredentials: true,
});

export const Service = API.createApiService('');
