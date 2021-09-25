import  { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { CustomPipe } from './customPipe.pipe';

/*to make this class visible to angular ie to register this simple ts class as 
a component, we import component from angular core and use @Component annotation
also 
selector -> to select the html element, .class-name, #id, 
courses for <courses>
*/
@Component({
    selector: 'courses',
    template: `
    <h2>{{ "Title: " + title + getName() }}</h2> 
    <h2>{{pipe | uppercase | lowercase}}</h2> 
    <h2 [textContent]="title"></h2>
    
    <ul>
        <li *ngFor="let course of courses" >{{ course  }} </li>
    </ul>
    
    <div (click)="onDivClick()">
        <button (click)="onChange($event)" class="btn btn-primary" [class.btn1]="isActive">Change Color</button>
        <br/>
        <input #data (keyup.enter)="onKeyUp1(data.value)" />
        <br/>
        <input [(ngModel)]="color" (keyup.enter)="onKeyUp()" />
        <br/>
        <span [style.backgroundColor]="ifBackground ? 'cyan' : 'white' ">This background color is binded to color in the box</span>
        <br/>
        <span [style.backgroundColor]="color">Enter color in box to chage color here</span>
    </div>
    
    <table>
        <td [attr.colspan]="colSpan"></td>
    </table>
    
    <img src="{{ imgUrl }}" />
    <img [src]="imgUrl" />
    <h3>{{text | custompipe}}</h3>

    ` //back tick allows multiple lines and easy references
    // property binding in the binding of html tag properties to the component field
    // moreover we are binding our component to the DOM property not actully the HTML

    //use attr.property for html tag properties


})
// now put <courses> element in app component to render it also put CoursesComponent in the app module ts

export class CoursesComponent {
    title = " List of courses ";
    courses;
    imgUrl= "https://picsum.photos/200/300";
    colSpan=2;
    isActive=true; 
    ifBackground=true;
    color = "cyan";
    pipe = "this is PIPE, goes through 2 pipes ALL UPPER and then all lower";
    text = "lorem   ipsum";
    /**
     * is active here, on true binds btn1 class along with btn and btn-primary for our button element
     * on false only btn and btn-primary are there
     */

    // making instance of CoursesService
    // constructor() {
    //     let service = new CoursesService();
    //     this.courses = service.getCourse();
    // }

    // we can ask angular to do this bit by dependency injection
    // inject dependencies of class into constructor

    constructor(service: CoursesService) {
        this.courses = service.getCourse();
    }

    /**
     * decoupled the components by dependency injection, this way 
     * 
     */


    getName = () => { return "User"; }

    onChange($event:any) {
        $event.stopPropagation();
        // stops event going to div section
        console.log("button was clicked", $event);
        this.ifBackground = !this.ifBackground;       
    }
    onDivClick() {
        console.log("div was clicked");
    }
    onKeyUp () {
        //color is template variable
        //this is two way binding
        console.log("Enter was pressed now color is ",this.color);
    }
    onKeyUp1 (color:any) {
        //color is template variable
        //[value] = color is one way binding
        console.log("Enter was pressed now color is ",color);
    }

}