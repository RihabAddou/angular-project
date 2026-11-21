import { Component, inject } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.scss',
})
export class Panier {
  panier = inject(PanierService);
}