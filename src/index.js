let answerSymbol
let hideAuthor

let hasChangedOnLastSeconds = false

chrome.storage.sync.get({
   answerSymbol: '❯',
   hideAuthor: false
}, function(items) {
   answerSymbol = items.answerSymbol
   hideAuthor = items.hideAuthor
});

const input = document.getElementsByTagName('bc-require')[0].getElementsByTagName('trix-editor')[0]

const messageContainers = document.getElementsByClassName('chat-line__bubble')

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
   const messageText = document.createTextNode(`${answerSymbol} ${messageValue}`)

   message.appendChild(previousMessage)
   message.appendChild(br)
   message.appendChild(messageText)

   input.innerHTML = ''
   input.appendChild(message)
}

function insertReplyOnButton() {
   Object.entries(messageContainers).map((messageContainerArr) => {

      const messageContainer = messageContainerArr[1]
      const oldButton = messageContainer.getElementsByClassName('chat-line__reply')[0]

      if(oldButton && oldButton.parentNode) oldButton.parentNode.removeChild(oldButton)
      
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
         createMessage(`${!hideAuthor ? `${author} :` : ''} ${messageBody}`, currentMessage)
      })
   })
}

insertReplyOnButton()

const messagesInfiniteList = document.getElementsByTagName('bc-grouped-dates')[0]
messagesInfiniteList.addEventListener('DOMNodeInserted', function () { 

   if(hasChangedOnLastSeconds) {
      return
   } else {
      hasChangedOnLastSeconds = true
   }

}, false)

setInterval(function(){ 
   if(hasChangedOnLastSeconds) {
      insertReplyOnButton()
   }

   hasChangedOnLastSeconds = false
 }, 5000);