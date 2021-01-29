export interface Roles{
    admin: boolean;
    guest: boolean;
}

export class User
{
    constructor(
        public id: string,
        public email: string,
        private _token: string,
        private tokenExpirationDate: Date
    ){}

    get token()
    {
        if(!this.tokenExpirationDate || this.tokenExpirationDate <= new Date())
        {
            return null;
        }
        return this._token;
    }

    get tokenDuration()
    {
        if(!this.token)
        {
            return 0;
        }

        console.log("Time until logout:", this.tokenExpirationDate.getTime() - new Date().getTime())
        //return 2000; 
        return this.tokenExpirationDate.getTime() - new Date().getTime();
    }
}