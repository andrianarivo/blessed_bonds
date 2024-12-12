import logo from "@/assets/logo-3.png";
import { Card } from "@/components/ui/card";
import { UserAuthForm } from "./components/user-auth-form";

type SignInProps = {
  onSubmit: (data: { login: string; password: string }) => Promise<void>;
  errorMsg?: string;
};

export default function SignIn({ onSubmit, errorMsg }: SignInProps) {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <img src={logo} alt="Blessed Bonds" className="h-10 w-10" />
            <h1 className="text-xl font-medium">Blessed Bonds</h1>
          </div>
          <Card className="p-6">
            <div className="mb-1 flex flex-col space-y-2 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Entrez votre email et votre mot de passe ci-dessous pour vous connecter à votre compte
              </p>
            </div>
            <UserAuthForm onSubmit={onSubmit} errorMsg={errorMsg} />
          </Card>
        </div>
      </div>
    </>
  );
}
