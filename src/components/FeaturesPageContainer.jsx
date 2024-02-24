import React from "react";

export default function FeaturesPageContainer(){
    return (
        <div className="features-container">
            <h2>Getting Started</h2>
            <p>
                Clone our repository into the root directory where your Kubernetes configuration files are written. 
                
                Then, run a few commands and your dashboard will appear. 
                
                Choose the option that works best for your needs and your data will be rendered.
            </p>
            <h2>Scan Your Configuration Files</h2>
            <p>
                KAT will search through the repository in which it was installed for any Kubernetes
                configuration files, and render the status of all found API's into your dashboard, 
                alongside the status, recommended replacement, and notes, all taken directly from Kubernetes 
                documentation.
            </p>
            <h2>Scan Your Helm Chart</h2>
            <p>
            Simply input the "Add Repository" and "Install Chart" commands from Artifact Hub
             into the input fields prior to installing in your cluster. 
             
            KAT will find all API's 
            in the Helm Chart and render the status, recommended replacement, and notes, for each API 
            all taken directly from Kubernetes documentation. 
             
            Please ensure you have Helm installed and a cluster running, as our application will use 
            these to find the relevent API's.
            </p>
        </div>
    )
};