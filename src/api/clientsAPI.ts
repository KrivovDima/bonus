import { instance } from './instanceAPI';

export const clientsAPI = {
  receiveAccessToken(clientID: string, deviceID: string) {
    return instance.post<ReceiveAccessTokenResponseType>('clients/accesstoken', {
      idClient: clientID,
      accessToken: '',
      paramName: 'device',
      paramValue: deviceID,
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    });
  },
};

type ReceiveAccessTokenResponseType = {
  result: {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  };
  accessToken: string;
};
