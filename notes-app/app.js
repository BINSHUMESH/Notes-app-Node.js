const chalk=require('chalk')
const yarg=require('yargs')
const notes=require('./notes')

yarg.command({
    command:'add',
    describe:'add the data',
    builder:{
        title:{
            describe:'Title of the Note',
            type:'string'
        },
        body:{
            describe:'Content of the Notes',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yarg.command({
    command:'remove',
    describe:'remove the data',
    builder:{
        title:{
            describe:'Title of the Note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})
yarg.command({
    command:'listNotes',
    describe:'list the Notes',
    handler:function(){
        notes.listNotes()
    }
})
yarg.command({
    command:'read',
    describe:'read the data',
    builder:{
        title:{
            demandOption:true,
            describe:'Read the data present in note',
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
})
yarg.parse()