// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)";
  }
  if (license === "apache") {
    return "![License: Apache](https://img.shields.io/badge/license-Apache-blue)";
  } else return "No license for this product.";
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
- [Installation](#install)
- [How to use](#usage)    :compass: 
- [Credits](#credits)  :trophy:
- [License](#license)
- [GitHub username](#username)
- [Questions](#email)    :mailbox: 

## Description: 
${data.description}  

## Installation:
${data.install}

## Usage:
 ${data.usage}:compass:

## Credits
${data.credit}:trophy:

## License
${data.license} ${renderLicenseBadge(data.license)}

## Username
${data.username}

## Email: 
${data.email}:mailbox:
 


`;
}

module.exports = generateMarkdown;
