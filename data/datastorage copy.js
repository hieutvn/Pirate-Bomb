// Creating database with IndexedDB
// Prop. should swap later

export { DataStorage };


class DataStorage {

    constructor(db_name) {

        this.db_name            = db_name;
        this.db_version         = 1;
        this.database           = null;
        this.objectStore        = null;

    }
    
    createStorage(store_name) {

        const DB_request = window.indexedDB.open(this.db_name, this.db_version);        
       
        DB_request.onupgradeneeded = (event) => {
        
            this.database = event.target.result;

            this.objectStore = this.database.createObjectStore(store_name, { keyPath: 'id' });
            this.objectStore.createIndex('name', 'name', { unique: true });
            

            console.log("Upgraded to ", event.oldVersion, "to", event.newVersion);

            this.db_version++;
        };

        DB_request.onsuccess = (event) => {
            
            this.database = event.target.result;
            console.log('success!', event.target.result);
        }
        
        DB_request.onerror = (event) => {
        
            console.error('failed!', event.target.errorCode);
        } 
        
    }

    addObjectToStorage(spriteData) {

        if (this.database != null) {

            const transaction       = this.database.transaction(['sprites'], 'readwrite');
            this.objectStore        = transaction.objectStore('sprites');    
            const addDataRequest    = this.objectStore.add(spriteData);

            addDataRequest.onsuccess = (event) => { console.log("Sprite added to DB.", event.target.result); }
            addDataRequest.onerror   = (event) => { console.error("Sprite failed to add to DB.", event.target.errorCode); }
        }

    }

    readObjectFromStorage() {


    }

    deleteStorage() {

    }

    
    /*
    function makeTransaction(storeName, mode, callback = null) {
    
        let transaction = 
    }
    */
}            

