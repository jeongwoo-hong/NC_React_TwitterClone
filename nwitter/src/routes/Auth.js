import React from "react"

const Auth = () => <div>
    <form>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" placeholder="Log In" required />
    </form>
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>
</div>

export default Auth