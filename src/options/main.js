function save_options() {
   var answerSymbol = document.getElementById('answer_symbol').value;
   var hideAuthor = document.getElementById('hide_author').checked;

   try {
      chrome.storage.sync.set({
         answerSymbol: answerSymbol,
         hideAuthor: hideAuthor
      }, function() {
         var status = document.getElementById('status')
         status.textContent = 'Options saved. Reload the page'
         setTimeout(function() {
            status.textContent = '';
         }, 3000);
      });
   } catch (error) {
      var status = document.getElementById('status')
      status.className = 'error'
      status.textContent = `Internal Error. Don't saved`
   }
 }
 
 function restore_options() {
   chrome.storage.sync.get({
     answerSymbol: '❯',
     hideAuthor: false
   }, function(items) {
     document.getElementById('answer_symbol').value = items.answerSymbol;
     document.getElementById('hide_author').checked = items.hideAuthor;
   });
 }
 document.addEventListener('DOMContentLoaded', restore_options);
 document.getElementById('save').addEventListener('click',save_options);