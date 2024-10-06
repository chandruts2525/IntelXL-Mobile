export const baseUrl = 'https://intelxlapi.azurewebsites.net/api/';
// export const baseUrl = 'http://10.0.2.2:5034/api/';
// export const baseUrl = 'https://agapeworkstech.bsite.net/api/';

//get
export const signInUrl = (userId: string, password: string) : string => {
    return baseUrl + 'user/login?userId=' + userId + '&password=' + password;
}

//post
export const signUpUrl = baseUrl + 'user'

//get
export const signOutUrl = baseUrl + 'user/signOut'

//User update
export const userUpdateUrl = baseUrl + 'user/UpdateUserData/'


