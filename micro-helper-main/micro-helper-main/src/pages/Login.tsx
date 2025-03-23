
import { AuthForm } from "@/components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-md">
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
