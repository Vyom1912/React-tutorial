import React from 'react'

function Recentorder() {
  return (
    <div>
    <div className="container">
      <section className="gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row h-100">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="card card-stepper" style={{borderRadius: '16px'}}>
                <div className="card-header p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-2">
                        Order ID
                        <span className="fw-bold text-body">1222528743</span>
                      </p>
                      <p className="text-muted mb-0">
                        Place On
                        <span className="fw-bold text-body">12,March 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex flex-row mb-2">
                    <div className="flex-fill">
                      <h5 className="bold">Headphones Bose 35 II</h5>
                      <p className="text-muted">Qt: 1 item</p>
                      <h4 className="mb-3">
                        $ 299 <span className="small text-muted"> via (COD) </span>
                      </h4>
                    </div>
                    <div>
                      <img className="align-self-center img-fluid" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" width={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="card card-stepper" style={{borderRadius: '16px'}}>
                <div className="card-header p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-2">
                        Order ID
                        <span className="fw-bold text-body">1222528743</span>
                      </p>
                      <p className="text-muted mb-0">
                        Place On
                        <span className="fw-bold text-body">12,March 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex flex-row mb-2">
                    <div className="flex-fill">
                      <h5 className="bold">Headphones Bose 35 II</h5>
                      <p className="text-muted">Qt: 1 item</p>
                      <h4 className="mb-3">
                        $ 299 <span className="small text-muted"> via (COD) </span>
                      </h4>
                    </div>
                    <div>
                      <img className="align-self-center img-fluid" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" width={250} />
                    </div>
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

export default Recentorder;