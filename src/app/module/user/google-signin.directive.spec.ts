import { GoogleSigninDirective } from './google-signin.directive';
import * as firebase from 'firebase/app';

describe('GoogleSigninDirective', () => {
  it('should create an instance', () => {
    const directive = new GoogleSigninDirective(this.this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
    expect(directive).toBeTruthy();
  });
});
