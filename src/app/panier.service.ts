import { Injectable, signal, computed } from '@angular/core';
import { Produit } from './produit.model';

@Injectable({ providedIn: 'root' })
export class PanierService {
  private state = signal<Produit[]>([]);

  items = this.state.asReadonly();
  count = computed(() => this.state().length);
  total = computed(() => this.state().reduce((sum, p) => sum + p.prix, 0));

  ajouter(produit: Produit) {
    if (this.state().some(p => p.id === produit.id)) return;  
    this.state.update(liste => [...liste, produit]);
  }

  supprimer(id: number) {                                     
    this.state.update(liste => liste.filter(p => p.id !== id));
  }
}