import React from 'react'

function Profile() {
  return (
    <div>
    <div className="container">
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4 col-3 ms-auto mr-auto">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" className="rounded-circle img-fluid" style={{width: '100px'}} />
                  </div>
                  <h4 className="mb-2">Name</h4>
                  <p className="text-muted mb-4">
                    <span> Email </span><span className="mx-2">|</span>
                    <span>Phone Number</span>
                  </p>
                  <p className="text-muted mb-4">
                    <span> Date of Birth </span><span className="mx-2">|</span>
                    <span>Gender</span>
                  </p>
                  <p className="text-muted mb-4">
                    <span> Address</span>
                  </p>
                  <div className="mb-4 pb-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  )
}

export default Profile;