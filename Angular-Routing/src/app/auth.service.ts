export class AuthService {
  loggedIn = true;

  isAuthenticated(): any {
    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.loggedIn);
    //   }, 800);
    // });
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
