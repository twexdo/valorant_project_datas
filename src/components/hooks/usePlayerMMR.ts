import * as React from "react";
import Repositories from "../../repositories";

export type MMR = {
  currenttier: number;
  currenttierpatched: string;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  name: string;
  tag: string;
};

export const usePlayerMMR = (): MMR | false => {
  const [mmr, setMMR] = React.useState<MMR>();
  React.useEffect(() => {
    Repositories.getPlayerMMR().then((x) => {
      setMMR(x as MMR);
    });
  }, []);
  return mmr ?? false;
};
