import Input from "../components/Input"
import Button from "../components/Button"

function Login(){
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

            <h1 className="text-center text-3xl font-bold text-gray-900">
            CampusConnect
            </h1>

            <h2 className="mt-2 text-center text-xl text-gray-700">
                Login
            </h2>

            <p className="mb-8 mt-2 text-center text-gray-500">
            Welcome to the  IIEST Shibpur community
            </p>

            <form className="space-y-5">

            <Input
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
            />

            <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Create a password"
            />

            <Button type="submit">
                Login
            </Button>

            </form>

            <p className="mt-6 text-center text-gray-500">
                Dont't have an account?{" "}
            <a
                href="/Signup"
                className="font-medium text-blue-600 hover:underline"
            >
                Signup
            </a>
            </p>
        </div>            
        </div>
    )
}
export default Login