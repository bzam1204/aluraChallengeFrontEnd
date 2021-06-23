const btnHl = document.querySelector('[data-highlight]')
const codeArea = document.querySelector('[data-code-box]')
const lang = document.querySelector('[data-lang]')
console.log(lang.value)

lang.addEventListener('change', ()=>{
    mudaLinguagem()
})

function mudaLinguagem(){
    const codigo = codeArea.querySelector('code')
    console.log(codigo)
    codeArea.innerHTML = `<input type="radio" name="" id="macBtn-R">
    <input type="radio" name="" id="macBtn-Y">
    <input type="radio" name="" id="macBtn-G">
    <code contenteditable="true" class="code hljs ${lang.value}" aria-label="editor"></code>`
    codeArea.querySelector('.code').innerText = codigo.innerText
}

btnHl.addEventListener('click', () => {
    const codigo = codeArea.querySelector('code')
    hljs.highlightBlock(codigo)
})