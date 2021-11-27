/*export interface ResquestResponse {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address[];
    phone:    string;
    website:  string;
    company:  Company[];
}

 interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo[];
}

 interface Geo {
    lat: string;
    lng: string;
}

 interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
*/
import { Usuario } from './usuario';

export interface ResquestResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[];
    support:     Support;
}

 interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

 interface Support {
    url:  string;
    text: string;
}
/*usuario*/

export interface ResponseI{
  token:string;
  status:string;
}
