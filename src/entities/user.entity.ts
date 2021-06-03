export interface IUser {
  steamid: string;
  nicknames?: string;
  realName?: string;
  avatar_url: string;
  cards?: [];
  trade_url?: string;
  announced: boolean;
}
