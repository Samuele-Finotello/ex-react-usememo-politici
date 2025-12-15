ex-react-usememo-politici
===

Premessa: Stai costruendo una pagina per visualizzare una lista di politici. Tuttavia, vuoi evitare calcoli inutili e ottimizzare la performance del tuo componente. Segui le milestone per migliorare progressivamente il codice
Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare l'url base:
http://localhost:3333
al posto di:
https://freetestapi.com/api/v1
Ad esempio:
http://localhost:3333/users
per chiamare l'endpoint /users
Clicca qui per la guida su come installare il Server API Locale!

📌 Milestone 1: Recuperare e visualizzare i dati
Effettua una chiamata API a
http://localhost:3333/politicians

Salva la risposta in uno stato React (useState).

Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

Nome (name)
Immagine (image)
Posizione (position)
Breve biografia (biography)

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

📌 Milestone 2: Implementare la ricerca ottimizzata
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.

🎯 Bonus: Filtrare anche per posizione politica (position)
Creare un array derivato che contiene tutte le posizioni politiche (position) disponibili, ma senza duplicati.
Aggiungere un <select> sopra la lista che permette di filtrare i politici anche in base alla loro posizione.
Modificare l’array filtrato per tenere conto sia della stringa di ricerca, sia della posizione selezionata.