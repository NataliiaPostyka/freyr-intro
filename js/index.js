// Get the current year
const today = new Date()
const thisYear = today.getFullYear()

//footer element
const footer = document.querySelector("footer")

//paragraph element
const copyright = document.createElement("p")

//copyright text
copyright.innerHTML = `&copy; ${thisYear} Nataliia Postyka`

// Append the paragraph to the footer
footer.appendChild(copyright)

//skills
const skills = [
  "Quality Assurance (QA)",
  "Automation Testing",
  "JavaScript (JS)",
  "TypeScript (TS)",
  "UI Development",
  "Backend Development",
]

const skillsSection = document.getElementById("skills")

const skillsList = skillsSection.querySelector("ul")

for (const skill of skills) {
  const skillListItem = document.createElement("li")
  skillListItem.textContent = skill
  skillsList.appendChild(skillListItem)
}

// DOM Selection: Select the form and add a submit event listener
const messageForm = document.forms.leave_message
messageForm.addEventListener("submit", function (event) {
  // Prevent form from refreshing the page
  event.preventDefault()

  // Retrieve form field values
  const usersName = messageForm.usersName.value
  const usersEmail = messageForm.usersEmail.value
  const usersMessage = messageForm.usersMessage.value

  // Log the form field values
  console.log("Name:", usersName)
  console.log("Email:", usersEmail)
  console.log("Message:", usersMessage)

  // Clear the form fields
  messageForm.reset()

  // Create new message entry
  const messageSection = document.querySelector("#messages")
  const messageList = messageSection.querySelector("ul")

  const newMessage = document.createElement("li")
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `

  const removeButton = document.createElement("button")
  removeButton.textContent = "remove"
  removeButton.type = "button"
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode
    entry.remove()
  })

  newMessage.appendChild(removeButton)
  messageList.appendChild(newMessage)
})
