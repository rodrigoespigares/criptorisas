import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GithubAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private router: Router) { }
  link = "cartera";
    usuario = "";
    datos:any;
  iniciaSesionGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential != null){
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                this.usuario = user.uid;
                this.datos = user;
                this.router.navigate([this.link]);
            }
            
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
inicioCorreo(emailInicio:string ,passInicio:string ) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailInicio, passInicio)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            this.usuario = user.uid;
            this.datos = user;
            this.router.navigate([this.link])
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
registroCorreo(emailRegistro:string,passRegistro:string ) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRegistro, passRegistro)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            this.usuario = user.uid;
            this.datos = user;
            this.router.navigate([this.link])
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
}
iniciaSesionGitHub() {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        if(credential != null){
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            this.usuario = user.uid;
            this.datos = user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            this.router.navigate([this.link]);
        }
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });
}
iniciaSesionFacebook() {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // The signed-in user info.
        const user = result.user;
        

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        if(credential!=null){
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
            this.usuario = user.uid;
            this.datos = user;
            this.router.navigate([this.link]);
        }
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
    });
}
}
