
export class userModel {
    constructor(
        public id : string,
        public direccion : string,
        public fechaEntrega : string,
        public franjaHora1 : string,
        public franjaHora2 : string,    
        public nombre : string,
        public apellido : string,
        public email : string,
        public telefono :  number,
        public userId : number){
    }
}