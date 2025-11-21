import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
