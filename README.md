![The Old Guard Logo](banner.png)
# theOldGuard
This is the createChinaApp cli tool

# Setup

> Note this is best used on a linux enviroment
### Requirements 
        The Deno runtime is required to run the old guard
            Linux
`curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh`
            Windows
`choco install deno`
        To learn more about [Deno](https://deno.land/).   


 ### Lets begin
        This is a toolchain to setup and manage your software development
             > This tool is still in development
        
        To Create A app run
        
`deno run --allow-run oldGuard.ts createApp `

        which will then create a client folder with the china framework app created, and developed on parse and react
        so
`cd client\client `
        and run
`npm install npm start`



### ToDo
> create a add to client new remote for purposes of seperating the tool and the app
> a hook file generator based on it being the most used to start a page.
> a components module for the components
> create a push to vercel for deployment purposes. !still thinking about it 