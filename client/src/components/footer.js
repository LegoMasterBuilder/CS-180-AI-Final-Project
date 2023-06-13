import * as React from 'react';

export default function Footer() {
  return (
    <div class="container footer pt-3">
      <div class="py-3 my-4">
        <div class="nav justify-content-center border-bottom pb-1 mb-3">
          <div><p>reddit r<b>AI</b>nger</p></div>
        </div>
        <div><p class="text-center text-muted">Classifying Reddit Titles using Naive Bayesian Classifier</p></div>
        <p class="text-center text-muted">Copyright © 2023</p>
      </div>
    </div>
  );
}