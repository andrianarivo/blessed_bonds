import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "./hooks/useSignUpMutation";
import SignUp from "./sign-up";

export default function SignUpContainer() {
  const navigate = useNavigate();
  const [signUp, { loading }] = useSignUpMutation();

  const handleSubmit = async (values: { email: string; password: string; name: string }) => {
    const response = await signUp({ variables: values });
    if (response.data) {
      navigate("/home");
    }
  };

  return <SignUp onSubmit={handleSubmit} loading={loading} />;
}
