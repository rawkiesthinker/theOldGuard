async function runCli(){

    try {
         const gitProcess = Deno.run({
            cmd: ["deno","run","--allow-read","--allow-write","--allow-run", "cli.ts", Deno.args[0]],
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
            console.log("please indicate the project you would like to create");
          }
          
          Deno.exit(code);
    }
    catch(e){
        console.log(e)
    }

  }


  if (import.meta.main) {

    runCli();
    
  }