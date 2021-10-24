// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  if (license = 'mit'){
    return '![License: MIT](https://img.shields.io/badges/License-MIT-brightgreen)'
  }
  if (license = 'apache'){
    return '![License: Apache] (https://img.shields.io/badges/license-Apache-blue)'
  }
  
}
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {""}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title: ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents:
###What it is and How to use | Who helped,          ###                          | who protects, who to ###                          | contact 
-------------------------------------------------
 -[Title] (#title)|  -[Credits](#credits)
 -[Description] (#description)|-[License](#license)
 -[Installation](#install)|-[GitHub username](#username)
 -:toolbox:[How to use:] (#usage)|[Questions](#email)
 
## Description: 
${data.description}  

## Installation:
${data.install}

## Usage:
:toolbox: ${data.usage}

## Credits
I would like to thank ${data.credit} for their contributions to this project.

## License
This project is licensed by: ${data.license}.

## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
`;
}

module.exports = generateMarkdown;
