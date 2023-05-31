const shareButton = document.querySelectorAll('.tile-share-button')
console.log(shareButton)
async function copyText(e){
    e.preventDefault()
    const link= this.getAttribute('link')
    console.log(link)

    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch(err){
        console.error(err)
    }

}

shareButton.forEach(shareButton => shareButton.addEventListener('click',copyText))

const share1Button = document.querySelectorAll('.share-button')
console.log(share1Button)
async function copyText1(e){
    e.preventDefault()
    const link= this.getAttribute('link')
    console.log(link)

    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch(err){
        console.error(err)
    }

}

share1Button.forEach(share1Button => share1Button.addEventListener('click',copyText))
