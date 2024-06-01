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

        const DB_request    = window.indexedDB.open(this.db_name, this.db_version);        
        this.objectStore    = db.createObjectStore(store_name, {keyPath: 'id'})

        DB_request.onupgradeneeded = (event) => {
        
            this.database = event.target.result;
            

            console.log("Upgraded to ", event.oldVersion, "to", event.newVersion);
        
            let object = DB_sprite.createObjectStore('sprites', {
        
                keyPath: "id",
        
            });
            this.objectStore.
        
            console.log(DB_sprite);
        };

        DB_request.onsuccess = (event) => {
        
            console.log('success!', event);
        }
        
        DB_request.onerror = (error) => {
        
            console.error('failed!', error);
        } 
        
    }

    addObjectToStorage() {


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

