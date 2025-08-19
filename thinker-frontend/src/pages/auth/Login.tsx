import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { URL } from "../../config.ts";

export const Login = () => {
  async function onSubmit(e: any) {
    const det = e.currentTarget;
    const username = det.username.value;
    const password = det.password.value;
    if (!username && !password) {
      alert("Empty fields");
      return;
    }
    const data = {
      username,
      password,
    };
    try {
      const res = await fetch(`${URL}/login `, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const resData = await res.json();
        localStorage.setItem("token", resData.token);
        alert("Logged in successfully");
        // navigate("/Homepage");
      } else {
        alert("Login failed");
      }
    } catch {
      alert("Error while sending data");
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
            <div className="text-pink-700 pl-30 pb-10 text-3xl font-bold size-xl">
              Login
            </div>
            <form onSubmit={onSubmit}>
              <div>
                <Input placeholder={"Username"} />
                <Input placeholder={"Password"} />

                <div className="pl-24">
                  <Button variant={"primary"} text={"LogIn"} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
