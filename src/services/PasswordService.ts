export default function generatePass(){
    let password: string = '';
    let characters: string  = 'A@1234567890abcdefghijKLNMOP';

    let passwordLength = 8
    for(let index=0; index<passwordLength; index++){
        password+= characters.charAt( Math.floor(Math.random() * passwordLength))
    }
    return password
}