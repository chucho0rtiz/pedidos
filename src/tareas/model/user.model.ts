
export class userModel {
    constructor(
        public id : string,
        public userName : string,
        public password : string,
        public rol : string,
        public estado : boolean,
        public nombre : string,
        public apellido : string,
        public email : string,
        public telefono :  number){
    }
}