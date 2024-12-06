import { Button } from "./components/ui/button";

function App() {
  const handleGoogleAuth = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?origin=${window.location.origin}`;
  };

  const handleFacebookAuth = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/facebook?origin=${window.location.origin}`;
  };

  return (
    <>
      <div className="flex gap-4">
        <Button onClick={handleGoogleAuth}>Login with Google</Button>
        <Button onClick={handleFacebookAuth} className="bg-[#1877F2] hover:bg-[#0C63D4] text-white">
          Login with Facebook
        </Button>
      </div>
    </>
  );
}

export default App;
