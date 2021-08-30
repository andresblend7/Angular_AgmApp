import { Token } from "@angular/compiler/src/ml_parser/lexer";

export interface UserLogin {
  userName:string;
  password: string;
}

export interface UserResponse {
  names: string;
  username : string;
  photo:string;
  accessId:string;
}
export interface UserLogged{
  data:UserResponse;
  token: string;
  isLogged: boolean;
}
