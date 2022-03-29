import { useQuery } from 'react-query';
import axios from 'axios';

type ExampleParams = {
  param1: any;
  param2: any;
};

type RequestParans = {
  param1: any;
  param2: any;
};

const fetchRequest = async ({ param1, param2 }: ExampleParams): Promise<{}> => {
  return axios
    .get(`url.request/${param1},${param2}`)
    .then(response => response.data);
};

const useExample = ({ param1, param2 }: RequestParans) => {
  return useQuery(['example', { param1, param2 }], () =>
    fetchRequest({ param1, param2 }),
  );
};

export { useExample };
