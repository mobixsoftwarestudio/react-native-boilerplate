import { useQuery } from 'react-query';
import axios from 'axios';

import { RequestOptionsType } from 'src/types/requestTypes';

type ExampleParams = {
  param1: any;
  param2: any;
};

type RequestParans = {
  param1: any;
  param2: any;
  requestOptions: RequestOptionsType;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type ResponseType = {};

const queryKey = 'example';

const fetchRequest = async ({
  param1,
  param2,
}: ExampleParams): Promise<ResponseType> => {
  return axios
    .get(`url.request/${param1},${param2}`)
    .then(response => response.data);
};

const useExample = ({
  param1,
  param2,
  requestOptions: { refetchOnWindowFocus, enabled },
}: RequestParans) => {
  return useQuery(
    [queryKey, { param1, param2 }],
    () => fetchRequest({ param1, param2 }),
    {
      refetchOnWindowFocus,
      enabled,
    },
  );
};

export { useExample, queryKey };
