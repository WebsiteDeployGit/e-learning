import React from "react";

export default function index() {
  return (
    <div className="container">
      <h1 className="title">Welcome to eLearning</h1>{" "}
      <h3 className="subtitle">Click on home or...</h3>
      <p>
        Check out{" "}
        <a
          href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BT9p9Tc3dT%2ByvBlf8LQSiFg%3D%3D"
          target={"_blank"}
          className="text-primary"
        >
         Smita.com.. 
        </a>
        for more projects and tutorials
      </p>
    </div>
  );
}
