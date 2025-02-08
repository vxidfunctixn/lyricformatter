import './main.scss'

class TextFormater {
   constructor() {
      this.originalText = document.getElementById('text')
      this.newText = document.getElementById('line-overlay')
      this.activeLine = 0
      this.activeColumn = 0

      let savedText = this.getSavedText()
      if(savedText) {
         this.originalText.value = savedText
      }
      this.textChange()

      this.originalText.addEventListener('input', () => this.textChange())
      this.originalText.addEventListener('selectionchange', () => this.textChange())
      this.originalText.addEventListener('scroll', () => this.textScroll())

      this.originalText.focus()
   }

   updateCursorPosition() {
      const cursorPosition = this.originalText.selectionStart;
      const textBeforeCursor = this.originalText.value.substring(0, cursorPosition);
      const lines = textBeforeCursor.split("\n");

      this.activeLine = lines.length - 1;
      this.activeColumn = lines[lines.length - 1].length;
   }

   getSavedText() {
      let savedText = this.getCookie('lyrics_text')

      savedText = decodeURIComponent(savedText)
      return savedText !== 'undefined' && savedText.length ? savedText : false
   }

   getCookie(name) {
      var value = "; " + document.cookie
      var parts = value.split("; " + name + "=")
      if (parts.length == 2) return parts.pop().split(";").shift()
   }

   textChange() {
      document.cookie = "lyrics_text=" + encodeURIComponent(this.originalText.value);
      let newText = ''
      let tmpLines = this.originalText.value.split('\n')
      let verseCount = 1
      let versesCount = new Array()
      let lines = new Array()
      versesCount.push({
         syllable: new Array(),
         avarangeSyllable: 0
      })

      tmpLines.forEach((line, index) => {
         let syllable = this.countLineSyllabes(line)
         if(syllable !== 0) {
            versesCount[versesCount.length - 1].syllable.push(syllable)
         }

         const isHeader = line.trim().startsWith("[") && line.trim().endsWith("]")

         lines.push({
            syllable: syllable,
            text: line,
            verseCount: verseCount,
            isHeader,
         })

         if(syllable === 0 || index === tmpLines.length - 1 || isHeader) {
            verseCount = 1
            versesCount[versesCount.length - 1].avarangeSyllable = this.getAvarangeSyllable(versesCount[versesCount.length - 1].syllable)
            versesCount.push({
               syllable: new Array(),
               avarangeSyllable: 0
            })
         } else {
            verseCount++
         }

      })

      this.updateCursorPosition();
      lines.forEach((line, index) => {
         const isActiveLine = index === this.activeLine
         const highlightClass = isActiveLine ? ' highlight' : '';
         const cursorCarret = '<span class="cursor-carret"></span>';

         let columnData = `<span class="separator"></span>`
         let textHighLight = line.text

         if(isActiveLine) {
            textHighLight = textHighLight.slice(0, this.activeColumn) + cursorCarret + textHighLight.slice(this.activeColumn);
         }

         const textHighLightCommentArr = textHighLight.split('//')
         textHighLight = textHighLightCommentArr[0]
         const textHighLightCommentArr2 = textHighLight.split(`/${cursorCarret}/`)
         if(textHighLightCommentArr2.length > 1) {
            textHighLight = `${textHighLightCommentArr2[0]}<span class="comment">/${cursorCarret}/${textHighLightCommentArr2[1]}</span>`
         }
         if(textHighLightCommentArr.length > 1) {
            textHighLight += `<span class="comment">//${textHighLightCommentArr.slice(1).join('//')}</span>`
         }



         if(line.isHeader) {
            columnData = `<span class="header"></span>`
            textHighLight = `<span class="header">${textHighLight}</span>`
         }
         else if(line.syllable > 0) {
            const firstClass = line.verseCount === 1 ? ' first' : ''
            const nextElement = lines?.[index + 1]
            const lastClass = nextElement === undefined ||
                              nextElement?.syllable === 0 ||
                              nextElement?.isHeader
                              ? ' last' : ''
            columnData = `
               <span class="verseNumber">${line.verseCount}.</span>
               <span class="syllable">${line.syllable}</span>
               <span class="buckle${firstClass}${lastClass}">
            `
         }

         let lineHTML = `
         <div class="line${highlightClass}">
            <div class="column-data">
               ${columnData}
            </div>
            <div class="text-highlight">${textHighLight}</div>
         </div>
         `

         newText += lineHTML
      })
      this.newText.innerHTML = newText
   }

   getAvarangeSyllable(syllable) {
      if(syllable.length) {
         let sum = syllable.reduce((previous, current) => current += previous)
         return Math.round(sum / syllable.length)
      } else {
         return 0
      }
   }

   countLineSyllabes (lineOfText) {
      let temp = 0;
      const removeComment = lineOfText.split('//')[0].trim()
      const removeSpecialChars = removeComment.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]/g, '')
      const reduceSyllablesCount = removeSpecialChars.replace(/([aeiouyąęó])\1{2,}/gi, '$1')
         .replace(/(?<=[bcdfghjklmnpqrstvwxyz])([aeiouyąęó])\1(?=[bcdfghjklmnpqrstvwxyz])/gi, '$1$1')
         .replace(/([aeiouyąęó])\1(?!\w)/gi, '$1');
      const wordArr = reduceSyllablesCount.match(/\S+/g)
      if(!wordArr) return temp
      for(let i = 0; i < wordArr.length; i++) {
         const vowelCount = wordArr[i].match(/[aeiouyąęó]/gi)

         if (vowelCount != null) {
            temp += vowelCount.length
         }

         const count_of_i = wordArr[i].toLowerCase().split(/[i]/g)
         if (count_of_i != null && count_of_i.length > 1) {
            for (let j = 1; j < count_of_i.length; j++) {
               const nextLetter = count_of_i[j][0]
               if (nextLetter != null) {
                  if(nextLetter.match(/[aeiouąęó]/gi) != null)
                     temp--
               }
            }
         }
      }

      return temp
   }

   textScroll() {
      this.newText.scroll({
         left: this.originalText.scrollLeft,
         top: this.originalText.scrollTop
      })
   }
}

window.textformater = new TextFormater()