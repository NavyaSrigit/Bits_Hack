
import { AuthForm } from "@/components/AuthForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-md">
        <AuthForm type="signup" />
      </div>
    </div>
  );
};

export default Signup;
