import React, { useState } from "react";

function UygulamaLogin() {
  const [station, setStation] = useState(false);
  return (
    <div>
      {station ? <span>online</span> : <span>offline</span>}
      <h1>Uygulama Login</h1>
      <button onClick={() => setStation(true)}>giriş yap</button>
      <button onClick={() => setStation(false)}>çıkış yap</button>
    </div>
  );
}

export default UygulamaLogin;
