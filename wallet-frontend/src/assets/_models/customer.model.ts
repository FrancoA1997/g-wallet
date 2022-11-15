import { FileHandle } from "./file-handle.model"

export interface userLogged{
    [x: string]: any
    firstName: String,
    secondName:  String,
    address :  String,
    phoneNumber:  String,
    email:  String,
    username:  String,
    img : FileHandle[]
    
}