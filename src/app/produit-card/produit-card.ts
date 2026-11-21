import { Component, input, output } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.scss',
})
export class ProduitCard {
  produit = input.required<Produit>();
  ajoute = output<Produit>();

  ajouterAuPanier() {
    this.ajoute.emit(this.produit());
  }
}