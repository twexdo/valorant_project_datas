import * as React from "react";
import Repositories from "../../repositories";

export type Account = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: Card;
  last_update: string;
};

export type Card = {
  small: string;
  large: string;
  wide: string;
  id: string;
};

export const useAccount = (): Account | false => {
  const [account, setAccount] = React.useState<Account>();
  React.useEffect(() => {
    Repositories.getAccount().then((x) => {
      setAccount(x as Account);
    });
  }, []);
  return account ?? false;
};
