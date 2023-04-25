
import { useState, useEffect } from "preact/hooks";

export default function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
     async function checkSession() {
          const response = await fetch("/api/session", {
            method: "GET",
            credentials: "include",
          });
          console.log(response)
          if (response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const userData = await response.json();
              setIsSignedIn(true);
              setUserName(userData.username);
            } else {
              setIsSignedIn(false);
            }
          } else {
            setIsSignedIn(false);
          }
        }
        checkSession();
      }, []);
    
    return (
      <header>
          <a href="/" >
              <img class="rot-340" width="48" src="/logo.png"/>
              <h2>Kasmira</h2>
              <img class="rot-20" width="48" src="/logo.png"/>
          </a>
          {isSignedIn ?
          <div class="flex">
              Welcome <a href={userName}>{userName}!</a>
              <a href="/logout">Logout</a>
          </div>
          :
          <div class="flex">
              <a href="/signup" class="btn btn-secondary">Sign Up</a>
              <a href="/login" class="btn btn-primary">Log In</a>
          </div>}
      </header>
  );
}