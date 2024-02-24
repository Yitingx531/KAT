import React from "react";

export default function HomePageContainer(){
    return (
        <>
        <div id="about_page_container">
        <div id="about_page_content_container">
         <p>
          Following extensive research and consultations with Kubernetes engineers, we have identified a potential solution aimed at streamlining the process of tracking API versioning status within Kubernetes clusters. Rather than dedicating significant time to manual documentation review, we propose the development of a streamlined tool. This tool, designed for effortless integration into cluster management workflows, offers the ability to rapidly scan clusters or Helm charts pre-installation. It not only identifies available updates or deprecations in API versions but also presents succinct snippets of official Kubernetes documentation pertaining to the versioning status. This consolidated information is presented in a singular, user-friendly interface, facilitating swift decision-making and cluster maintenance.
         </p>
       </div>
       </div>
       </>
    )
};