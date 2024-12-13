import logo from "@/assets/logo-3.png";
import { Card } from "@/components/ui/card";
import { UserForm } from "./components/user-form";

type SignUpProps = {
  onSubmit: (data: { name: string; email: string; password: string; confirmPassword: string }) => Promise<void>;
  loading: boolean;
  errorMsg?: string;
};

export default function SignUp({ onSubmit, loading, errorMsg }: SignUpProps) {
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
              <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
              <p className="text-sm text-muted-foreground">Enter your informations below to create your account</p>
            </div>
            <UserForm onSubmit={onSubmit} errorMsg={errorMsg} loading={loading} />
          </Card>
        </div>
      </div>
    </>
  );
}
