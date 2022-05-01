const {app , BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
    //criando janelas com atributos iniciais
    mainWindow = new BrowserWindow({ 
        width: 1100,
        height: 750,
        resizable: false,
        show: false,
        autoHideMenuBar: true,
    });
    
    //carregando a URL do site para colocar no desktop
    mainWindow.loadURL("http://localhost:3000");
    //esperando a tela ser completamente carregado para aparecer
    mainWindow.on('ready-to-show', ()=>{ 
        mainWindow.show(); 
    });
}

app.on('ready', createWindow);