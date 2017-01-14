import { Component } from '@angular/core';

import { TodoService } from './todo/todo.service';

@Component({
  selector: 'my-app',
  providers: [TodoService],
  styles: [`div.container { border: solid 1px red; margin: 10px; padding: 10px; }`],
  template:
  `

  <h1>{{appTitle}}</h1><br>
    <div>logTime at: {{logTime}}</div>
    <br>
    <div>
      Refreshed:{{currentDateTime}} 
      <button (click)="setCurrentTime()">Refresh</button>
    </div>
    <br>

<strong>one way binding</strong>: Edit app title:<input type="text" [value]="appTitle" placeholder="enter title">
 <br>
<strong>two way binding </strong>: Edit title again:<input type="text" [ngModel]="appTitle" (ngModelChange)="appTitle=$event" >
( using (ngModelChange))
<br>

<strong>TRUE! two way binding </strong>: Edit title : )
<input type="text" [(ngModel)]="appTitle">
 <hr>

  <div>
      <h2>App Component</h2>
      <counter></counter>
  </div>

<hr> 
<!--
The ngNonBindable attribute is used to allow us to display Angular code on our page. 
It lets us output expressions inside {{}} without it being parsed by Angular
-->
<!--
<![CDATA[]]> is needed to be able to output HTML on to the page without the browser trying to render it
-->
    <div class="container">
        <div class="well">
            <h4> Another example project -- Interpolation</h4>
            <div class="well">
              <p ngNonBindable>{{firstName}}</p>
            </div>
            
            <div>
              <p> First Name: {{firstName}} </p>
            </div>

            <h4>One way binding</h4>
            <div class="well">
              <![CDATA[<input [value]="firstName">]]>
            </div>
            <div>
              <input class="form-control" [value]="firstName">
            </div>

            <h4>Event Binding</h4>
            <div>
               <![CDATA[ <button (click)="addItem(enteredItem)" class="btn btn-default">Add</button>]]>
            </div>


            <div class="input-group">
              <input class="form-control" [(ngModel)]="enteredItem" />
              <span class="input-group-btn">
                <button (click)="addItem(enteredItem)" class="btn btn-default">Add</button>
              </span>
            </div>
            <ol>
              <li *ngFor="let item of items">{{item}}</li>
            </ol>

            <h4>Two way biding without ngModel</h4>
            <![CDATA[  <input [value]="firstName" (input)="firstName = $event.target.value">]]>
            <div>
              <input class="form-control" [value]="firstName" (input)="firstName=$event.target.value">
            </div>
            <div>
              <p>First Name: {{firstName}}<p>
            </div>

            <h4>Two way binding with ngModel</h4>
            <![CDATA[<input [(ngModel)]="firstName">]]>
            <div>
              <input class="form-control" [(ngModel)]="firstName">
             </div>
                <div>
                    <p>First Name: {{firstName}}</p>
                </div>
        </div>
    </div>



<hr> 
  <nav class="navbar navbar-default navbar-static-top">


      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">FireBootCamp Angular - Todo</a>
        </div>
        <ul class="nav navbar-nav">
          <!--This is an Angular router directive that when clicked will change the route to be / (the application root). 
          Because in our todo.routing.ts we do a redirect from '' to 'todo', this will load the todo component -->

          <li> <a [routerLink]="['/']">Todos</a></li>
          <li> <a [routerLink]="['/todoArchive']">Todo Archive</a></li>
        </ul>
      </div>
  </nav>
  <div class="container">

    <!-- A router oulet is where the current routes component will be loaded into the DOM. 
    Instead of putting the todo component directly on our AppComponent 
    we now use a router outlet that displays the content that we have routed to -->
    <router-outlet></router-outlet>

    <!--
      <todo></todo>
      -->
  </div>

  
  `
})
export class AppComponent {

  appTitle: string = "This is a todo application.";
  logTime: Date = new Date();
  currentDateTime: Date;
  firstName: string = 'John Doe';
  item:string = '';
  items:string[] = [];

  addItem(item:string){
    this.items.push(item);
  }


  setCurrentTime() {
    this.currentDateTime = new Date();
  }

}
