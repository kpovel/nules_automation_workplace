import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isFilledForm = login.length && password.length;

  async function verifyLogin() {
    try {
      const auth = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      if (!auth.ok) {
        const response = (await auth.json()) as { message: string };
        throw Error(response.message);
      }

      switch (login) {
        case "AdminLogin":
          router.push("/roles/admin");
          break;
        case "InspectorLogin":
          router.push("/roles/inspector");
          break;
        case "ResponsibleLogin":
          router.push("/roles/responsible");
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }

  function submitForm(e: FormEvent) {
    e.preventDefault();
    void verifyLogin();
  }

  return (
    <>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <header>
          <h2 className="py-4">Увійти у систему</h2>
        </header>
        <main>
          <form
            className="space-y-6 max-w-2xl m-auto"
            action="#"
            onSubmit={submitForm}
          >
            <div>
              <label
                htmlFor="login"
                className="block text-sm font-medium leading-6 text-white"
              >
                Логін
              </label>
              <div className="mt-2">
                <input
                  id="login"
                  name="login"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter your login"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Пароль
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!isFilledForm}
              className={`flex w-full justify-center rounded-md bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                !isFilledForm ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Увійти
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
