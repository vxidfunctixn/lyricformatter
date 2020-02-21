import './main.scss'

class TextFormater {
   constructor() {
      this.originalText = document.getElementById('text')
      this.newText = document.getElementById('new-text')

      let savedText = this.getSavedText()
      if(savedText) {
         this.originalText.value = savedText
         this.textChange()
      }

      this.originalText.addEventListener('input', () => this.textChange())
      this.originalText.addEventListener('scroll', () => this.textScroll())

      this.originalText.focus()
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

         lines.push({
            syllable: syllable,
            text: line,
            verseCount: verseCount,
            versesNumber: versesCount.length - 1
         })

         if(syllable === 0 || index === tmpLines.length - 1) {
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

      lines.forEach(line => {
         let verses = versesCount[line.versesNumber];
         let syllablesLevel = 3
         let colorClass = ''
         let syllableHTML = ''
         let verseCountHTML = line.verseCount + '.'

         if(line.syllable < (verses.avarangeSyllable - 1) || line.syllable > (verses.avarangeSyllable + 1)) {
            syllablesLevel--
         }
         if(line.syllable % 2 !== 0) {
            syllablesLevel--
         }

         switch(syllablesLevel) {
            case 1: {
               colorClass = 'red'
               break
            }
            case 2: {
               colorClass = 'yellow'
               break
            }
            case 3: {
               colorClass = 'green'
               break
            }
         }

         if(line.syllable === 0) {
            verseCountHTML = ''
         } else {
            syllableHTML = `<span class="syllable ${colorClass}">${line.syllable}</span>`
         }
         let lineHTML = `
         <div class="line">
            <div class="column-data">
               <span class="verseNumber">${verseCountHTML}</span>
               ${syllableHTML}
            </div>
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
      var temp = 0;
      var word = lineOfText.match(/\S+/g)
      if (word != null) {
         for(var i = 0; i < word.length; i++) {
            var vowelCount = word[i].match(/[aeiouyąęó]/gi)

            if (vowelCount != null) {
               temp += vowelCount.length
            }

            var count_of_i = word[i].toLowerCase().split(/[i]/g)
            if (count_of_i != null && count_of_i.length > 1) {
               for (var j = 1; j < count_of_i.length; j++) {
                  var nextLetter = count_of_i[j][0]
                  if (nextLetter != null) {
                     if(nextLetter.match(/[aeiouąęó]/gi) != null)
                        temp--
                  }
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