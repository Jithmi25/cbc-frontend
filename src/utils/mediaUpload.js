const key= `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdG52ZG9tcXF5ZGh5dm5taWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzUwNjQsImV4cCI6MjA1MjQ1MTA2NH0.Vr40lSFDOzqN8BfS3n7EQyp1JBrrqNtE8bL8JG78D2s`
const url="https://nptnvdomqqydhyvnmibx.supabase.co"


export default function UploadMediaToSuperbase(file){

return new Promise((resolve, reject) => {
    if(file==null){
       reject("File Not Added.")
       let fileName= file.name
       const extension = fileName.split(".")[fileName.split(".").length-1]
    }
    const superbase = createClient(url,key)
    
    const timestamp= new Date().getTime()
    fileName= timestamp + "."+ extension

})


     if(file==null){
            alert("File not Uploarded")
            return
        }
        console.log(file)
    
        let fileName= file.name
        //const extension= fileName.split(".")[fileName.split(".").length-1 ]
        const extension = fileName.split(".").pop().toLowerCase(); // Normalize to lowercase
    
       if(extension != "jpg" && extension!="png"){
        alert("please select a png or jpg file.")
        return
       }
    
    const superbase = createClient(url,key)
    
    const timestamp= new Date().getTime()
    fileName= timestamp + "."+ extension
    
    console.log(fileName)
    
    superbase.storage.from("images").upload(fileName,file,{
        CacheControl : "3600",
        upsert : false
    })
    const url2 = superbase.storage.from("images").getPublicUrl(fileName)
    
}
