import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { URL } from "../../config";

export const Signup = () => {
  async function handleSubmit(e: any) {
    const det = e.currentTarget;
    const username = det.username.value;
    const password = det.password.value;

    if (!username || !password) {
      alert("Username and password fields are empty");
      return;
    }
    const data = {
      username,
      password,
    };
    try {
      const res = await fetch(`${URL}/signup `, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("Account created");
      } else {
        alert("Account already exists");
      }
    } catch {
      alert("Server error");
    }
  }
  return (
    <>
      <div className="h-screen bg-pink-100">
        <div className="flex text-xl pt-10 pl-10">
          <span className="text-4xl">💡</span>
          <span className="text-pink-800 flex font-bold text-4xl">Thinker</span>
        </div>
        <span className=" items-center text-pink-400 font-bold pl-23">
          Storage For Extras ----
        </span>
        <div className="  flex -mt-23 h-full justify-center items-center">
          <div className=" bg-white text-xl px-7 py-20 rounded-3xl border border-pink-300">
            <div className="text-pink-700 pl-7 pb-10 text-3xl font-bold size-xl">
              Create Your Account
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input placeholder={"Username"} />
                <Input placeholder={"Password"} />

                <div className="pl-24">
                  <Button variant={"primary"} text={"SignUp"} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
