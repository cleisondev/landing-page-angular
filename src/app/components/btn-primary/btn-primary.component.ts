import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { text } from 'stream/consumers';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
@Input("btn-text") btntext: string = "";
@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() variant: BtnVariants= "primary";
@Output("submit") onSubmit = new EventEmitter();

submit(){
  this.onSubmit.emit();
}


}
