let isAppCreated : Boolean | undefined;

async function createApp(){

  try{

    for await (const dirEntry of Deno.readDir("client")) {
      if(dirEntry.name.toString() == "china"){
        isAppCreated = true;
      }
 
    }

    if(!isAppCreated){
     
      getApp();
    }

    console.log("happy coding...🦖");


  }catch(e){

    if(Deno.errors.NotFound.name == e.name){
      console.log("File Does not Exist")
      createFolder();
    }
  }
}


async function createFolder(){

  console.log("Creating Client Folder")
  try{
    
   let folder = await Deno.mkdir("client");
   console.log("Folder Created");
   console.log("Creating the app");
   await getApp();
  

  }catch(e){

    if(Deno.errors.AlreadyExists.name == e.name){
      console.log("File Already Exists")
    }

  }

}


async function getApp(){

  const gitProcess = Deno.run({
    cmd: ["git","clone","https://github.com/devUniversity/project-china.git","client/china"],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await gitProcess.status();

if (code === 0) {
  const rawOutput = await gitProcess.output();
  await Deno.stdout.write(rawOutput);
} else {
  const rawError = await gitProcess.stderrOutput();
  const errorString = new TextDecoder().decode(rawError);
  console.log("project already exsists you may begin coding");
}

Deno.exit(code);
}


if (import.meta.main) {
  
  const expr = Deno.args[0];
switch (expr) {
  case 'createApp':
    console.log("starting to create app..."); 
    createApp();
    break;
  case 'Server':
    console.log('Creating Server');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 'Template':
    console.log('Impleting Template chosen');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, you need to select and option checkout --help to find out what is availbile`);
}


}