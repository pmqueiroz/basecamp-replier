const input = document.getElementsByTagName('bc-require')[0].getElementsByTagName('trix-editor')[0]

const messageContainers = document.getElementsByClassName('chat-line__bubble')
const avatarContainers = document.getElementsByClassName('chat-line__avatar')

function sanitizeElements(input) {
   function sanitize() {
      let indexStart = input.indexOf('<')
      let indexEnd = input.indexOf('>')
      const arr = Array.from(input)
      arr.splice(indexStart, (indexEnd - indexStart) + 1)
      input = arr.join('')
   }

   while (input.indexOf('<') >= 0) {
      sanitize()
   }

   return input.trim()
}

function createMessage(previousMessageValue, messageValue) {
   const message = document.createElement('div')
   const br = document.createElement('br')
   const previousMessage = document.createTextNode(sanitizeElements(previousMessageValue).replace('&nbsp;', ''))
   const messageText = document.createTextNode(`>>> ${messageValue}`)

   message.appendChild(previousMessage)
   message.appendChild(br)
   message.appendChild(messageText)

   input.innerHTML = ''
   input.appendChild(message)
}

Object.entries(messageContainers).map((messageContainerArr) => {
   const messageContainer = messageContainerArr[1]
   
   const author = messageContainer.getElementsByClassName('chat-line__author')[0].innerHTML

   const messageBody = messageContainer.getElementsByClassName('chat-line__body')[0].innerHTML
   const metaContainer = messageContainer.getElementsByClassName('chat-line__meta')[0]
   
   const button = document.createElement('button')
   const buttonValue = document.createTextNode('↶')
   button.className = 'chat-line__reply'
   button.appendChild(buttonValue)
   metaContainer.appendChild(button)

   button.addEventListener("click", function() {
      const currentMessage = sanitizeElements(String(document.getElementsByTagName('bc-require')[0].getElementsByTagName('trix-editor')[0].innerHTML))
      createMessage(`${author}: ${messageBody}`, currentMessage)
   })
})

