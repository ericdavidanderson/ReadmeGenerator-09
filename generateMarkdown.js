// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license === "mit")) {
    return "![License: MIT](https://img.shields.io/badges/License-MIT-brightgreen)";
  }
  if ((license = "apache")) {
    return "![License: Apache] (https://img.shields.io/badges/license-Apache-blue)";
  }
  else return "No license for this product."
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {""}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title: ${data.title}

 ${renderLicenseBadge(data.license)}

## Table of Contents:
- [Title](#title) 
- [Description](#description)
- [Installation(#install)
- :compas: [How to use:](#usage) 
- :trophy: [Credits](#credits)
- [License](#license)
- [GitHub username](#username)
- :mailbox: [Questions](#email)

## Description: 
${data.description}  

## Installation:
${data.install}

##:compas: Usage:
 ${data.usage}

##:trophy: Credits
I would like to thank ${data.credit} for their contributions to this project.

## License
${data.license}

## Username
${data.username}

##:mailbox: Email: 
${data.email}
 


`;
}

module.exports = generateMarkdown;
