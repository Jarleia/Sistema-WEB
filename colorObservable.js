// colorObservable.js
import { BehaviorSubject } from 'rxjs';

// valor inicial: preto
export const colorSubject = new BehaviorSubject('black');

// função para alternar cor
export function toggleColor() {
  const current = colorSubject.getValue();
  colorSubject.next(current === 'black' ? 'red' : 'black');
}
