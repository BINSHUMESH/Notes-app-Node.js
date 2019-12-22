const fs=require('fs')
const chalk=require('chalk')
const addNote=(title,body)=>{
    const notes=loadNote()
    const duplicateNote=notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes)
        console.log("Notes Added")
    }else{
        console.log("Title already exist")
    }
    
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNote=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch{
        return []
    }

}
const removeNote=(title)=>{
    const notes=loadNote()
    const notefind=notes.filter(function(notes){
        return notes.title!=title
    })
    if(notes.length===notefind.length){
        console.log(chalk.red('No Note exist'))
    }else{
        console.log(chalk.green('Note Removed'))
        saveNotes(notefind)
    }
}
const listNotes=()=>{
    const notes=loadNote()
    console.log(chalk.green("Your Notes Are: "))
    for(i=0;i<notes.length;i++){
        console.log(chalk.red((i+1)+". "+notes[i].title+"\n"))
    }
}
const readNotes=(title)=>{
    const notes=loadNote()
    console.log(chalk.inverse.yellow(title))
    const notefind=notes.find((note)=>note.title===title)
    if(notefind){
        console.log(chalk.green(notefind.body))
    }else{
        console.log(chalk.red("No Notes Found"))
    }
}
module.exports={
    addNote:addNote,
    listNotes:listNotes,
    readNotes:readNotes,
    removeNote:removeNote
}