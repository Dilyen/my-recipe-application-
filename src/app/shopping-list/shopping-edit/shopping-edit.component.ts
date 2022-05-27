import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { lngredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef;
  //emitting our own ingredients by getting it from shoppist-edit component
  @Output() ingredientAdded = new EventEmitter<lngredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new lngredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }


}
