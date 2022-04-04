import { createContext, useContext, useState } from 'react';

const fakeAuthen = {
  signIn: (callback) => {
    setTimeout(callback, 100);
  },
  signOut: (callback) => {
    setTimeout(callback, 100);
  },
};

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(parseStr(localStorage.getItem('user')));

  function parseStr(str) {
    let result = null;
    try {
      result = JSON.parse(str);
    } catch (error) {
      console.log(error);
    }
    return result;
  }

  const signIn = (credential, onSuccess) => {
    return fakeAuthen.signIn(() => {
      console.log('Authen success');
      setUser(credential);
      localStorage.setItem('user', JSON.stringify(credential));
      onSuccess();
    });
  };

  const signOut = (onSuccess) => {
    return fakeAuthen.signOut(() => {
      console.log('Logout');
      setUser(null);
      onSuccess();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
