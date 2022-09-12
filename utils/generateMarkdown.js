// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Mozilla Public License') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '- [License](#License)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## [License](#License)
    This project is under ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}
  
  # ${data.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#Questions)


  ## [Description](#Description)
  ${data.description}

  ## [Installation](#Installation)
  ${data.install}

  ## [Usage](#Usage)
  ${data.usageInfo}

  ## [Contributions](#Contributions) 
  ${data.guidelines}

  ## [Tests](#Tests)
  ${data.test}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## [Questions](#Questions)
  Please Use the following links to contact me!
  
  [Github](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
