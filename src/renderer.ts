/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './assets/css/index.scss';
import img from './assets/images/LM.png';

const { ipcRenderer } = require('electron')


function init() { 
    document.getElementById("min-btn").addEventListener("click", function (e) {
        ipcRenderer.send('focused-window', 'minimize')
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
        ipcRenderer.send('focused-window', 'maximize')
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
        ipcRenderer.send('focused-window', 'close')
    }); 

    document.getElementById("option-quit").addEventListener("click", function (e) {
        ipcRenderer.send('focused-window', 'close')
    }); 

    (<HTMLImageElement>document.querySelector("#index-logo")).src = img;
}; 

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
         init(); 
    }
};

console.log('👋 This message is being logged by "renderer.js", included via webpack');
