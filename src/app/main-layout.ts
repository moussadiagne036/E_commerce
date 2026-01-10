import {Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
@Component({
    selector: "app-main-layaout",
    imports : [RouterOutlet],
    template :`
    <app-header/>
    <router-outlet/>
    <app-footer/>


    `,
    
 
})
export class MainLayout {
    
}