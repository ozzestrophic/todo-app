import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private fs: Firestore) {}
  getItems() {
    let todosCollection = collection(this.fs, 'todos');
    let todosOrdered = query(todosCollection, orderBy('time', 'desc'));
    return collectionData(todosOrdered, { idField: 'id' });
  }

  fireAddItem(newItem: Item) {
    let data = {
      ...newItem,
    };
    let todosCollection = collection(this.fs, 'todos');
    return addDoc(todosCollection, data);
  }

  fireDeleteItem(id: string) {
    let docRef = doc(this.fs, 'todos/' + id);
    return deleteDoc(docRef);
  }

  fireEditItem(id: string, description: string) {
    let docRef = doc(this.fs, 'todos/' + id);
    return updateDoc(docRef, { description });
  }

  fireToggleItem(id: string, done: boolean) {
    let docRef = doc(this.fs, 'todos/' + id);
    return updateDoc(docRef, { done: !done });
  }
}
