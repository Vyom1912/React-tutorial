import React from "react";

const Addproduct = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="card col-6 p-3 mt-5 ms-auto me-auto">
            <h2 class="text-center text-success h2 mt-3 mb-3">Add Product</h2>
            <hr />
            <form
              id="contact-form"
              name="contact-form"
              action="#"
              method="POST">
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="productname"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Product Name
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="price"
                      name="price"
                      class="form-control"
                    />
                    <label for="price" class="">
                      Product Price
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      class="form-control"
                    />
                    <label for="title" class="">
                      Title
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="file"
                      id="producrtimage"
                      name="producrtimage"
                      class="form-control"
                    />
                    <label for="producrtimage" class="">
                      Producrt Image
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      rows="2"
                      class="form-control md-textarea"></textarea>
                    <label for="description">Description</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left col-3 mt-4">
                <button
                  className="styles_button__NRFkP"
                  onclick="document.getElementById('contact-form').submit();">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addproduct;
