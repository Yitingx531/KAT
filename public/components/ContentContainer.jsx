import React from 'react';
import dashboard from '../static/tempImages/dashboard.png';
import logo from '../static/tempImages/logo.png';

export default function ContentContainer() {
    return (
        <>
            <div id='content-container-main'>
                <section id='content-intro'>
                    <h2>Kubernetes API Tracker</h2>
                    <p>No Frills | No Login | No Permissions</p>
                </section>

                <section id='content-dashboard'>
                    <h2> One Screen - Two Features</h2>
                    <img id='image-dashboard' src={dashboard} />
                </section>

                <section id='content-midway'>
                    <p>The last thing a K8s developer needs is another feature-saturated third-party app to <em>'make things easier'.</em></p>
                    <p>That's why KAT, with a single command from your terminal, provides a view of your entire cluster's API versioning in one page.</p>
                </section>

                <section id='content-features'>
                    <div id='content-local-scan' className='content-feature-items'>
                        <h2>Local Cluster Scan</h2>
                        <p>Clone our repo into the root dir of your cluster then run <em>npm kat</em> and your scan will automatically open in your localhost</p>
                    </div>

                    <div id='content-helm-scan' className='content-feature-items'>
                        <h2>Helm Chart Scan</h2>
                        <p>Simply enter the repo and install links and we'll do a dry-run before you ever need to install it on your machine</p>
                    </div>
                </section>
                {/* <hr /> */}
            </div>
        </>
    )
};