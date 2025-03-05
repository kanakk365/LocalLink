import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/authSlice";

import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginWithPopup, user, getAccessTokenSilently } = useAuth0();

  const handleGoogleLogin = async () => {
    try {
      await loginWithPopup({
        authorizationParams: {
          connection: "google-oauth2",
        },
      });

      const token = await getAccessTokenSilently();
      console.log(user);
      console.log("Token:", token);

      // Dispatch login to Redux store
      dispatch(
        login({
          user: { email: user?.email ?? "", name: user?.name ?? "" },
          token: token ?? "",
        })
      );

      // Send token to Django backend
      await fetch("http://127.0.0.1:8000/api/google-login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sending token in Authorization header
        },
        body: JSON.stringify({
          email: user?.email,
          name: user?.name,
          token: token,
        }),
      });

      // Direct to delivery page instead of generic app page
      navigate("/delivery");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <div className="bg-neutral-900 fixed w-full z-50">
        <Link to={"/"}>
          <h1 className="text-white py-4  px-6 text-2xl font-semibold">
            LocalLink
          </h1>
        </Link>
      </div>
      <div className="h-[100vh] flex justify-center items-center bg-[#ffffff]">
        <div className="max-w-md w-96 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-[#ffffff] h-fit">
          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-gray-200 hover:bg-[#dddddd] text-black py-2 px-4 text-xl rounded-lg flex items-center gap-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
