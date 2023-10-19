import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "./app/apiSlice";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, loginResult] = useLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginResult.error) {
            if (loginResult.error.status === 401) {
                alert(loginResult.error.data.detail);
            } else if (loginResult.error.status === 422) {
                alert(loginResult.error.data.detail[0].msg);
            }
        }
        if (loginResult.isSuccess) {
            navigate("/");
        }
    }, [loginResult, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div>
            <div>
                <h5>Login</h5>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label>Email or Username:</label>
                            <input
                                name="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            Don't have an account? <Link to={"/signup"}>Sign up here</Link>
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
