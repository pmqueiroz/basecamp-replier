function save_options() {
   let answerSymbol = document.getElementById('answer_symbol').value
   let hideAuthor = document.getElementById('hide_author').checked
   let showAllMessages = document.getElementById('show_all_messages').checked

   try {
      chrome.storage.sync.set({
         answerSymbol: answerSymbol,
         hideAuthor: hideAuthor,
         showAllMessages: showAllMessages
      }, function() {
         let status = document.getElementById('status')
         status.textContent = 'Options saved. Reload the page'
         setTimeout(function() {
            status.textContent = ''
         }, 3000)
      })
   } catch (error) {
      let status = document.getElementById('status')
      status.className = 'error'
      status.textContent = `Internal Error. Don't saved`
   }
 }
 
 function restore_options() {
   chrome.storage.sync.get({
     answerSymbol: '❯',
     hideAuthor: false,
     showAllMessages: false
   }, function(items) {
     document.getElementById('answer_symbol').value = items.answerSymbol
     document.getElementById('hide_author').checked = items.hideAuthor
     document.getElementById('show_all_messages').checked = items.showAllMessages
   })
 }
 document.addEventListener('DOMContentLoaded', restore_options)
 document.getElementById('save').addEventListener('click',save_options)