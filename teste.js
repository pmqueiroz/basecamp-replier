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

console.log(sanitizeElements(`<bc-attachment sgid="BAh7CEkiCGdpZAY6BkVUSSIpZ2lkOi8vYmMzL1BlcnNvbi8zNDg3MjM4NT9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIPYXR0YWNoYWJsZQY7AFRJIg9leHBpcmVzX2F0BjsAVDA=--ab30acff02d67c8ca3b2c6cd52d23d8ebecc4133" content-type="application/vnd.basecamp.mention"><figure class="attachment attachment--content attachment--mention"> <bc-mention class="mentionable-person" gid="gid://bc3/Person/34872385"> <img title="Peam, zelador de storybook at Web" alt="Peam" data-behavior="rich_avatar" data-rich-avatar-url="/4129278/people/34872385/rich_avatar" data-avatar-for-person-id="34872385" data-turbolinks-recyclable="true" data-controller="lazy-image" class="avatar" width="20" height="20" data-lazy-image-srcset="https://bc3-production-assets-cdn.basecamp-static.com/4129278/people/BAhpBEEcFAI=--3d789e9d7645587d26140ca4fb51d38c3156838d/avatar-20-x1?v=1 1x, https://bc3-production-assets-cdn.basecamp-static.com/4129278/people/BAhpBEEcFAI=--3d789e9d7645587d26140ca4fb51d38c3156838d/avatar-20-x2?v=1 2x, https://bc3-production-assets-cdn.basecamp-static.com/4129278/people/BAhpBEEcFAI=--3d789e9d7645587d26140ca4fb51d38c3156838d/avatar-20-x3?v=1 3x, https://bc3-production-assets-cdn.basecamp-static.com/4129278/people/BAhpBEEcFAI=--3d789e9d7645587d26140ca4fb51d38c3156838d/avatar-20-x4?v=1 4x" data-lazy-image-src="https://bc3-production-assets-cdn.basecamp-static.com/4129278/people/BAhpBEEcFAI=--3d789e9d7645587d26140ca4fb51d38c3156838d/avatar-20-x1?v=1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgZGTgAgAAFgANgZ2mDQAAAABJRU5ErkJggg=="> Peam </bc-mention> </figure></bc-attachment> n tem como`))

