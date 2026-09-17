import Input from "../components/Input"
import Button from "../components/Button"

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-gray-900">
          CampusConnect
        </h1>

        <h2 className="mt-2 text-center text-xl text-gray-700">
          Create your account
        </h2>

        <p className="mb-8 mt-2 text-center text-gray-500">
          Join the IIEST Shibpur community
        </p>

        <form className="space-y-5">

          <Input
            id="first-name"
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />

          <Input
            id="middle-name"
            label="Middle Name"
            type="text"
            placeholder="Enter your middle name"
          />

          <Input
            id="last-name"
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />

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

          <Input
            id="confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />

          <Button type="submit">
            Create Account
          </Button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <a
            href="/Login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </a>
        </p>

      </div>

    </div>
  )
}

export default Signup