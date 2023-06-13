import React from 'react'

// components
import Image from 'react-bootstrap/Image';

function Jian() {
    return ( 
      <div class="container pt-3 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-md-9 col-lg-7 col-xl-5">
            <div class="card" style={{ borderRadius: '15px' }}>
              <div class="card-body p-4">
                <div class="d-flex text-black">
                  <div class="flex-shrink-0">
                    <Image src="lara.jpg"
                    alt="Generic placeholder image" class="img-fluid"
                    style={{width: '180px', borderRadius: '10px'}} />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-1">Lara Angeline DL. Punsalan</h5>
                    <p class="mb-2 pb-1" style={{ color: '#2b2a2a' }}>CS 180 WFW</p>
                    <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p class="small text-muted mb-1">Contact</p>
                        <p class="mb-0">ldpunsalan@up.edu.ph</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div> 
    );
}

export default Jian;