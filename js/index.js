// Get the current year
const today = new Date()
const thisYear = today.getFullYear()

// Select the footer element
const footer = document.querySelector("footer")

// Create a new paragraph element
const copyright = document.createElement("p")

// Set the inner HTML of the paragraph to display the copyright text
copyright.innerHTML = `&copy; ${thisYear} Nataliia Postyka`

// Append the paragraph to the footer
footer.appendChild(copyright)

// List of technical skills
const skills = [
  "Quality Assurance (QA)",
  "Automation Testing",
  "JavaScript (JS)",
  "TypeScript (TS)",
  "UI Development",
  "Backend Development",
]

// Select the skills section
const skillsSection = document.getElementById("skills")

// Select the skills list
const skillsList = skillsSection.querySelector("ul")

// Loop through the skills array and create list items for each skill
for (const skill of skills) {
  const skillListItem = document.createElement("li")
  skillListItem.textContent = skill
  skillsList.appendChild(skillListItem)
}
