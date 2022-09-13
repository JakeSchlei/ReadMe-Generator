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
  } 
    return '';
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
    return '- [License](#License)'
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } 
  console.log(license);
    return '## License \n This project is licensed under ' + license;
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usageInfo}

  ## Contributions
  ${data.guidelines}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}

  

  ## Questions
  Please Use the following links to contact me!
  
  [Github](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
