import { LightningElement,api } from 'lwc';
import bootstrap from '@salesforce/resourceUrl/bootstrapp';
import jquery from '@salesforce/resourceUrl/bootstrapp';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import teslalogo from '@salesforce/resourceUrl/HorseSanctuarylogo';
import img1 from '@salesforce/resourceUrl/horse1';
import img2 from '@salesforce/resourceUrl/horse2';
export default class LogicMountLWC extends LightningElement 
{
    @api logo=teslalogo;
    @api dimg1=img1;
    @api dimg2=img2;
    renderedCallback() {
        Promise.all([
            loadScript(this, bootstrap + '/bootstrap-5.3.0-alpha1-dist/js/bootstrap.js'),
            loadScript(this, jquery),
            loadStyle(this, bootstrap + '/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css')
        ])
            .then(() => {
                console.log("All scripts and CSS are loaded. perform any initialization function.")
            })
            .catch(error => {
                console.log("failed to load the scripts");
            });
    }
}