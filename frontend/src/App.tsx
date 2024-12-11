import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";

const ME_QUERY = graphql(`
  query Me {
    me {
      id
      name
      email
      avatarUri
      provider
      providerId
    }
  }
`);

function App() {
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);
  const { data, loading } = useQuery(ME_QUERY);

  const handleGoogleAuth = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?origin=${window.location.origin}`;
  };

  const handleFacebookAuth = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/facebook?origin=${window.location.origin}`;
  };

  if (loading) return null;
  console.log(data);

  return (
    <>
      <div className="flex gap-4">
        {data?.me ? (
          <Avatar>
            <AvatarImage src={data.me.avatarUri ?? undefined} alt={data.me.name} referrerPolicy="no-referrer" />
            <AvatarFallback>{data.me.name?.[0]}</AvatarFallback>
          </Avatar>
        ) : (
          <>
            <Button onClick={handleGoogleAuth}>Login with Google</Button>
            <Button onClick={handleFacebookAuth} className="bg-[#1877F2] hover:bg-[#0C63D4] text-white">
              Login with Facebook
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
