# podstawy-javascript

# 📝 Zadanie: Analiza Liczb w Tablicy  

## 🎯 Cel  
Twoim zadaniem jest napisanie funkcji, która przeanalizuje tablicę liczb i zwróci:  
- sumę wszystkich liczb,  
- liczbę elementów parzystych,  
- liczbę elementów nieparzystych,  
- największą i najmniejszą liczbę w tablicy.  

## ✅ Wymagania  
1. Stwórz funkcję `analyzeNumbers(numbers)`, która:  
   - przyjmuje tablicę liczb `numbers`,  
   - zwraca obiekt z kluczami:  
     ```js
     {
       sum: 0,            // suma wszystkich liczb
       evenCount: 0,      // liczba elementów parzystych
       oddCount: 0,       // liczba elementów nieparzystych
       min: 0,            // najmniejsza liczba
       max: 0             // największa liczba
     }
     ```  
2. Jeśli tablica jest pusta, funkcja powinna zwrócić `null`.  
3. Funkcja musi przejść testy automatyczne.  

## 📂 Struktura plików  
- `index.js` → tu piszesz swój kod  
- `index.test.js` → tu są testy (nie edytuj!)  

## 🚀 Jak zacząć?  
1. Sklonuj repozytorium na swój komputer lub otwórz w IDE na gitHub
2. Napisz kod w `index.js`.  
3. Uruchom testy komendą:
4. Gdy wszystko działa, zatwierdź (`git commit`) i wypchnij (`git push`).  

## 🔍 Przykłady działania  

```js
console.log(analyzeNumbers([1, 2, 3, 4, 5]));  
// { sum: 15, evenCount: 2, oddCount: 3, min: 1, max: 5 }

console.log(analyzeNumbers([-10, 0, 10, 20]));  
// { sum: 20, evenCount: 3, oddCount: 1, min: -10, max: 20 }

console.log(analyzeNumbers([]));  
// null

