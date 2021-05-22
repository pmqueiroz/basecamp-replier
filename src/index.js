const input = document.getElementsByTagName('bc-require')[0].getElementsByTagName('trix-editor')[0]

const messageContainers = document.getElementsByClassName('chat-line__bubble')

function createMessage(previousMessageValue, messageValue) {
   const message = document.createElement('blockquote')
   const br = document.createElement('br')
   const previousMessage = document.createTextNode(previousMessageValue)
   const messageText = document.createTextNode(`>>> ${messageValue}`)

   message.appendChild(previousMessage)
   message.appendChild(br)
   message.appendChild(br)
   message.appendChild(messageText)

   input.appendChild(message)
}

Object.entries(messageContainers).map((messageContainerArr) => {
   const messageContainer = messageContainerArr[1]
   const messageBody = messageContainer.getElementsByClassName('chat-line__body')[0].innerHTML
   const metaContainer = messageContainer.getElementsByClassName('chat-line__meta')[0]

   
   const button = document.createElement('button')
   const buttonValue = document.createTextNode('↶')
   button.appendChild(buttonValue)
   metaContainer.appendChild(button)

   button.addEventListener("click", function() {
      createMessage(messageBody, '')
   })
})