import * as React from 'react';
import Image from 'react-bootstrap/esm/Image';

function ResponsiveAppBar() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-5" style={{ borderColor: '#FF4500' }}>
        <a href="http://localhost:3000/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <Image width="50" style={{ marginRight: 20 }} src="RAIngerlogo.png" />
            <span class="ml-2 fs-4">reddit r<b>AI</b>nger</span>
        </a>
    
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="http://localhost:3000/" class="nav-link" aria-current="page" style={{ color: 'black' }}>Home</a></li>
            <li class="nav-item"><a href="http://localhost:3000/about" class="nav-link" style={{ color: 'black' }}>About</a></li>
            <li class="nav-item"><a href="https://github.com/LegoMasterBuilder/CS-180-AI-Final-Project.git" class="nav-link" style={{ color: 'black' }}>GitHub</a></li>
        </ul>
      </header>
    </div>
  );
}
export default ResponsiveAppBar;