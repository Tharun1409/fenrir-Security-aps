import { useNavigate } from "react-router-dom"
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6"


function Login( ) {

    const navigate =useNavigate()

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()

        navigate('/dashboard')
    }

    return (
        <div className="auth-container">
            <div className="auth-left">
                <h1 className="logo">aps</h1>

                <h1>Expert Level CyberSecurity in hours not Weeks</h1>

                <ul>
                    <li>Effortlessly spider and map targets</li>
                    <li>Deliver high-quality findings</li>
                    <li>Generate enterprise security reports</li>
                </ul>
                <p className="rating">⭐ Rated 4.5/5.0 (100k+ reviews)</p>

            </div>
            <div className="auth-right">
 
                <form className="signup-form" onSubmit={handleSubmit}> 
                                   <p className="auth-switch">
Already have an account? <span>Login</span>
</p>
                    <h2>Create Account</h2>


                    <input placeholder="First Name" required />
                    <input placeholder="Last Name" required/>
                    <input  type="email" placeholder="Email address" required/>
                    <input type="password" placeholder="password (8+characters)"/>
                    <label className="checkbox">
  <input type="checkbox" required />
  I agree to Terms & Privacy Policy
</label>


                    <button>Create Account</button>
                    <div className="social-login">
                        <button className="social-btn">
                            <FcGoogle size={20}/>

                            </button> 

                            <button className="social-btn">
                                <FaMeta size={20}/>
                            </button>

                            <button className="social-btn">
                                <FaApple size={20}/>
                            </button>

                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login