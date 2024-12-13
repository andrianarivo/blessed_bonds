import { PasswordInput } from "@/components/custom/password-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrandFacebook, IconBrandGoogle, IconLoader } from "@tabler/icons-react";
import { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface UserFormProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  onSubmit?: (data: z.infer<typeof formSchema>) => Promise<void>;
  loading?: boolean;
  errorMsg?: string;
}

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Please enter your name" }),
    email: z.string().min(1, { message: "Please enter your email" }).email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, { message: "Please enter your password" })
      .min(4, { message: "Password must be at least 4 characters" }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function UserForm({ onSubmit: onSubmitProps, errorMsg, loading, ...props }: UserFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    formState: { errors },
    setError,
    clearErrors,
  } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (onSubmitProps) {
      await onSubmitProps(data);
    }
  };

  const handleInputChange = () => {
    if (errors.root) {
      clearErrors("root");
    }
  };

  useEffect(() => {
    if (errorMsg) {
      setError("root", { type: "manual", message: errorMsg });
    }
  }, [errorMsg, setError]);

  return (
    <div {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInputChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="mail@example.com"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInputChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                </div>
                <FormControl>
                  <PasswordInput
                    placeholder="********"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInputChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="********"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInputChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {errors.root?.message && <p className="text-sm font-medium text-destructive">{errors.root.message}</p>}

          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <IconLoader className="mr-2 h-4 w-4" /> : null}
            Sign up
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button onClick={() => (window.location.href = "/api/auth/google")}>
              <IconBrandGoogle className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button onClick={() => (window.location.href = "/api/auth/facebook")}>
              <IconBrandFacebook className="mr-2 h-4 w-4" />
              Sign up with Facebook
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
