import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Notify } from "notiflix"
import PocketBaseService from "@/services/pocketbaseService"
import AuthService from "@/services/authService"
import { useRouter } from "next/router"
import Head from "next/head"


export default function Home() {
  // State for UI loading when submitting form
  const [loading, setLoading] = useState(false)
  // Next router
  const router = useRouter()

  useEffect(() => {
    // Get token from localStorage using AuthService and check if exists
    const token = AuthService.getAuthData()
    // If token exists, redirect to locations page
    if (token) {
      // Redirect to dashboard
      router.push("/dashboard")
    }
  },[router])

  
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      // Set loading to true
      setLoading(true)
      try {
        // Destructure username and password from form values
        let { username, password } = values
        // Call login method from PocketBaseService to login user
        const user = await PocketBaseService.login(username, password)
        // If user and user.token exists, save user data in localStorage
        if (user && user.token) {
          // Save user data in localStorage
          AuthService.setAuthData(user.token, user.record)
          // Redirect to locations page
          Notify.success("Bienvenido!")
          // Redirect to dashboard
          router.push("/dashboard")
        }
      } catch (e) {
        console.log(e)
        // Show error message using Notify
        Notify.failure("Usuario/contrasena incorrectos.")
      } finally {
        // Set loading to false
        setLoading(false)
      }
    }
  })

  return (
    <>
      <Head>
        <title>TIQUIPAYA</title>
      </Head>
      <div className='container' class='col'>
        <div className='left'class='row'>
          <h2>Iniciar Sesión</h2>
          
          <img src="/images/LogoTiquipaya.png" width={100} alt="Logo" />
          <form className="form" onSubmit={loginForm.handleSubmit}>
            <input 
              type="text"
              value={loginForm.values.username}
              onChange={loginForm.handleChange("username")}
              className="form-control"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={loginForm.values.password}
              onChange={loginForm.handleChange("password")}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Cargando..." : "Ingresar"}
            </button>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </>
  )
}
