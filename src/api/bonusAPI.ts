import { instance } from './instanceAPI';

export const bonusAPI = {
  getBonusInfo(accessToken: string) {
    return instance.get<GetBonusInfoResponseType>(`ibonus/generalinfo/${accessToken}`);
  },
};

type GetBonusInfoResponseType = {
  resultOperation: {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  };
  data: {
    typeBonusName: string;
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
  };
};
