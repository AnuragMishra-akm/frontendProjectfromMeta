function Login() {
    return(
        <div className="login-page">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;