import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome Back, Login your account
      </h1>
      <LoginForm />
    </div>
  );
}
