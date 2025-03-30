export default function Register() {
  return (
    <>
      <h3>Register</h3>
      <form action="">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
        <div className="flex gap-[8px]">
          <p>Already have an account?</p>
          <a href="/login">Login</a>
        </div>
      </form>
    </>
  );
}
