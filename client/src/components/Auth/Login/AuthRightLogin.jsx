import LoginForm from "./LoginForm";

export const AuthRightLogin = ({ setAuth }) => {
  return (
    <div className="flex-1 h-full">
      <LoginForm setAuth={setAuth} />
    </div>
  );
};
