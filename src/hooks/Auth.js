import {createContext, useContext, useCallback, useState} from 'react';

import firebase from '../config/firebase';
import api from '../services/api';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isSigned, setIsSigned] = useState(() => {
      const isSigned = localStorage.getItem('@GetAway:isSigned');
      if (isSigned) {
        return {isSigned};
      }
      return false;
    });

  const signIn = useCallback(async(
    {email, password}
  ) => {
    console.log(email);
    console.log(password);
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((async(userCrential) => {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        console.log(idToken);
        localStorage.setItem('token', idToken);
      }).catch(function(error) {
        console.log(error)
      });
      setIsSigned(true);
      localStorage.setItem('@GetAway:isSigned', isSigned);
      localStorage.setItem('uid', userCrential.user.uid);
      console.log('logado');
      console.log(userCrential)
    })).catch((error) => {
      console.log(error);
    }).finally((console.log('LOGOU')));
  }, [isSigned]);

  const signUp = useCallback(async(
    {email, password},
  ) => {
    console.log(email);
    console.log(password);
    console.log(email, 'emailInAuth');
    firebase.auth()
    .createUserWithEmailAndPassword(String(email), String(password))
    .then(async(userCrential) => {
      console.log('CADASTROU');
      const Token = 'Bearer '.concat((await userCrential.user?.getIdToken()).toString());
      console.log(Token);
      localStorage.setItem('token', Token)
      const response = await api.post(
        '/User',
        { name: "Squad 3" },
        { headers: { authorization: Token } }
      ).catch((error) => {
        console.log(error, 'ERRO DO BACKEND');
      });
      console.log(response);
    }).catch((error) => {
      console.log(error, 'ERRO DO FIREBASE');
    });
  }, []);

  const signOut = useCallback(() => {
    console.log('Deslogado');
    localStorage.removeItem('@GetAway:isSigned');
    setIsSigned(false);
    firebase.auth().signOut();
    localStorage.removeItem('token')
  }, []);


  const mudaSenha = useCallback(async(
    {newPassword}
  ) => {
    firebase.auth().currentUser.updatePassword(newPassword).then(function() {
      console.log("trocou senha");
      console.log(newPassword);
    }).catch(function(error) {
      console.log(error);
    });
  }, [firebase.auth().currentUser]);

  const mudaEmail = useCallback(async(
    {newEmail}
  ) => {
    firebase.auth().currentUser.updateEmail(String(newEmail)).then(function() {
      console.log("trocou email");
      console.log(newEmail);
    }).catch(function(error) {
      console.log(error);
  });
}, [firebase.auth().currentUser]);

const excluiUser = useCallback(async(
) => {
  firebase.auth().currentUser.delete().then(function() {
    console.log("excluiu");
  }).then(signOut()).catch(function(error) {
    console.log(error);
  }); 
}, [firebase.auth().currentUser]);

  return (
    <AuthContext.Provider value={{
      isSigned,
      signIn,
      signUp,
      signOut,
      mudaSenha,
      mudaEmail,
      excluiUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
//}
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};