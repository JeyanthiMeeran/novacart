import { Link } from "react-router-dom";

export default function Login() {
    return <div class="container">
                <div class="form-box">
                <h2>Welcome Nova Cart</h2>
                <p class="subtitle">Login to continue your journey</p>

                <form action="#" method="POST">
                    <div class="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required/>
                    </div>

                    <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required/>
                    </div>

                    <Link to={'/home'} type="submit" class="btn">Login</Link>

                    <p class="switch">
                    Don’t have an account? <Link to={"/Signup"} href="signup.html">Sign Up</Link>
                    </p>
                </form>
                </div>
            </div>
}