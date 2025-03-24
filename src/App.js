import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);

  const onSubmit = (e) => {
    // KODUNUZ BURAYA GELECEK
    e.preventDefault();

    const checkUser = accounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (checkUser) {
      alert(`Login başarılı, ${username}.`);
      setUsername("");
      setPassword("");
    } else {
      if (username.length > 6 && password.length > 6) {
        setAccounts((prev) => [...prev, { username, password }]);
        alert(`Yeni hesap oluşturuldu ,Merhaba ${username}.`);
        setUsername("");
        setPassword("");
      } else {
        alert("username ve password ,6 karakterden uzun olmalıdır.");
      }
    }
  };
  console.log(accounts);
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={
          /* KODUNUZ BURAYA GELECEK */ (e) => {
            e.target.value.length >= 20
              ? alert("username 20karakteri geçemez")
              : setUsername(e.target.value);
          }
        }
        style={{ marginBottom: 5 }}
        maxLength={20}
      />
      <input
        value={password}
        type="password"
        onChange={
          /* KODUNUZ BURAYA GELECEK */ (e) => {
            e.target.value.length >= 20
              ? alert("password 20karakteri geçemez")
              : setPassword(e.target.value);
          }
        }
        style={{ marginBottom: 10 }}
        maxLength={20}
      />
      <button style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;
