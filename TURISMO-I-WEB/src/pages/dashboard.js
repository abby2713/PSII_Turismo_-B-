import AuthService from '@/services/authService'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import LocationsForm from '@/components/dashboard/locationsForm'
import LocationsList from '@/components/dashboard/locationsList'
import PocketBaseService from '@/services/pocketbaseService'

export default function Dashboard() {
  const [currentContent, setCurrentContent] = useState(0)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [user, setUser] = useState(null)
  const [categories, setCategories] = useState([])

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const userData = AuthService.getAuthData()
      const categories = await PocketBaseService.getAll('category')
      setCategories(categories)
      if (!userData) {
        router.push('/')
      } else {
        setUser(userData)
      }
    })()
  }, [router])


  const logout = () => {
    AuthService.removeAuthData()
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>TIQUIPAYA | Dashboard</title>
      </Head>
      <div className='dashboard-page h-screen w-full overflow-hidden flex'>
        <div className='dashboard-page-section-1 items-center '>
          <div className='dashboard-user-details w-full h-2/5 flex flex-col items-center justify-center border-b border-main-text-color p-4'>
            <Image src={user && user.userData.photo ? `https://magnificent-painter.pockethost.io/api/files/_pb_users_auth_/${user.userData.id}/${user.userData.photo}` : '/images/user.png'} alt="User Avatar" width={100} height={100} />
            <br></br>
            <h4 className='text-main-text-color'>Administrador</h4>
            {/* <h3 className='text-main-text-color'>{user && user.userData && user.userData.email}</h3> */}
          </div>
          <div className='dashboard-user-navigation '>
            <h3>
            <Image src={'/images/LogoTiquipaya.png'} width={150} height={150}  className="mx-auto" />

              OPCIONES DE USUARIO
            </h3>
          </div>
          <div >
            <button className={currentContent === 0 ? 'active' : ''} onClick={() => { setCurrentLocation(null); setCurrentContent(0);; }}>
              <h4>Puntos Registrados</h4>
            </button>

          </div>
          <br />

          <div>
            <button className={currentContent === 1 ? 'active' : ''} onClick={() => { setCurrentLocation(null); setCurrentContent(1); }}>
              <h4>Agregar Punto</h4>
            </button>
          </div>


          <div className='dashboard-user-options w-full h-1/5 flex items-center justify-center'>
            <button
              className={`px-4 rounded bg-black text-main-text-color transition duration-200 ease-in-out hover:bg-secondary-text-color button-with-radius`}
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </div>


        </div>
        <div className='dashboard-page-section-2 '>
          <>
            {user && (
              <>
                {currentContent == 0 && (
                  <LocationsList categories={categories} user={user} setCurrentContent={setCurrentContent} setCurrentLocation={setCurrentLocation} />
                )}
                {currentContent == 1 && (
                  <LocationsForm categories={categories} user={user} setCurrentContent={setCurrentContent} location={null} />
                )}
                {currentContent == 2 && (
                  <LocationsForm categories={categories} user={user} setCurrentContent={setCurrentContent} location={currentLocation} setCurrentLocation={setCurrentLocation} />
                )}
              </>
            )}
          </>
        </div>
      </div>
    </>
  )
}
