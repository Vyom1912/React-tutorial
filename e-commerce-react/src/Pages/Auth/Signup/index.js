import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import styles from './styles.module.css'
import validations from './validations'

const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div className={styles.formGroupContainer}>
      <div className={styles.formGroup}>
        <div>
          <h2 className={styles.title}>Sign Up</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
          className={styles.signUpForm}
        >
          <div className={styles.inputGroup}>
            <div>
            {errors.photo && <span className={styles.error}>{errors.photo}</span>}
              <label className="sr-only">Photo</label>
              <input
                type="file"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.photo}
                name="Profile Photo"
              />
              
            </div>

            <div>
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              <label className="sr-only">First Name</label>
              <input
                type="text"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
            </div>

            <div>
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              <label className="sr-only">Last Name</label>
              <input
                type="text"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>

            <div className='container'>
            <div  className={styles.input}>
              <div className="form-check">
            <input  className="form-check-input" type="radio" name="male" id="male" defaultValue="option1" defaultChecked />
            <label className="form-check-label" htmlFor="male">
             Male
            </label>
           </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="female" id="female" defaultValue="option2" />
            <label className="form-check-label" htmlFor="female">
            Female
            </label>
          </div>
          </div>
          </div>


<div className='container'>
<label >Birthdate</label>
            <div className={styles.input} >
       
            <div>
            {errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
              <input
                type="date"
                onChange={handleSignUpFormChange}
                value={currentUser.birthdate}
                name="birthdate"
                placeholder="Birthdate"
              />
            </div>
            </div>
            </div>
            <label className="sr-only">Gender</label>

            <div>
            {errors.address && <span className={styles.error}>{errors.address}</span>}
              <label className="sr-only">Address</label>
              <input
                type="text"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.address}
                name="Address"
                placeholder="Address"
              />
            </div>
     

            <div>
            {errors.phonenumber && <span className={styles.error}>{errors.phonenumber}</span>}
              <label className="sr-only">Phonenumber</label>
              <input
                type="number"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.phonenumber}
                name="phonenumber"
                placeholder="phonenumber"
              />
            </div>

            <div>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
              <label className="sr-only">Email</label>
              <input
                type="email"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <span className={styles.error}>{errors.password}</span>}
              <label className="sr-only">Password</label>
              <input
                type="Password"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div className={styles.linkBox}>
              <div className={styles.linkDiv}>
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" className="text-blue-600 hover:underline">
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={styles.button}>
                <IdentificationIcon
                  className="my-auto h-5 w-6"
                  aria1-hidden="true"
                />
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
