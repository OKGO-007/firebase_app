//firebaseの使い方(このファイルは消してもいい)


// ユーザー登録
function signUpWithEmailAndPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Firestoreにユーザー情報を保存
        return db.collection("users").doc(user.uid).set({
          email: user.email,
          weight: null,
          height: null,
          createdAt: new Date()
        });
      });
  }
  
  // ユーザーのデータ更新
  function updateUserData(userId, dataToUpdate) {
    return db.collection("users").doc(userId).update(dataToUpdate);
  }
  
  // ユーザーのデータ取得
  function getUserData(userId) {
    return db.collection("users").doc(userId).get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          return null;
        }
      });
  }
  
  // ユーザーがログインした後の処理
  auth.onAuthStateChanged((user) => {
    if (user) {
      // ユーザーのデータを取得して表示
      getUserData(user.uid).then((userData) => {
        console.log(userData);
      });
    } else {
      // ログアウトなどの処理
    }
  });
  