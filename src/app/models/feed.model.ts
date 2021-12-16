import { User } from "./user.model";

export interface Feed {
  _id: string;
  likes: number;
  date: Date;
  user: User;
  text: string;
}
