import { Button } from "./components/ui/button";

function App() {
  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <>
      <div>
        <Button onClick={handleGoogleAuth}>Login with Google</Button>
      </div>
    </>
  );
}

export default App;
