import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private fs: Firestore) {}
  getItems() {
    let todosCollection = collection(this.fs, 'todos');
    return collectionData(todosCollection, { idField: 'id' });
  }

  addItem(newItem: Item) {
    let data = { description: newItem.description, done: false };
    let todosCollection = collection(this.fs, 'todos');
    return addDoc(todosCollection, data);
  }

  deleteItem(id: string) {
    let docRef = doc(this.fs, 'todos/' + id);
    return deleteDoc(docRef);
  }
}
