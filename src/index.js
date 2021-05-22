const input = document.getElementsByTagName('bc-require')[0].getElementsByTagName('trix-editor')[0]

const messageContainers = document.getElementsByClassName('chat-line__bubble')
const avatarContainers = document.getElementsByClassName('chat-line__avatar')

Object.entries(avatarContainers).map((avatarContainerArr) => {
   const avatarContainer = avatarContainerArr[1].getElementsByTagName('img')[0]
   avatarContainer.src = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
   avatarContainer.srcset = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
})

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

   input.dispatchEvent(new KeyboardEvent('keydown',{'key':'b'}))
}

Object.entries(messageContainers).map((messageContainerArr) => {
   const messageContainer = messageContainerArr[1]
   
   messageContainer.getElementsByClassName('chat-line__author')[0].innerHTML = "Fulano"

   const messageBody = messageContainer.getElementsByClassName('chat-line__body')[0].innerHTML
   const metaContainer = messageContainer.getElementsByClassName('chat-line__meta')[0]
   
   const button = document.createElement('button')
   const buttonValue = document.createTextNode('↶')
   button.className = 'chat-line__reply'
   button.appendChild(buttonValue)
   metaContainer.appendChild(button)

   button.addEventListener("click", function() {
      createMessage(messageBody, '')
   })
})

