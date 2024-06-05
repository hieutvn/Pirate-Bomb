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
    
    createStorage() {

        return new Promise((resolve, reject) => {


            const DB_request = window.indexedDB.open(this.db_name, this.db_version);

            DB_request.onupgradeneeded = (event) => {
        
                this.database = event.target.result;
                
                this.objectStore = this.database.createObjectStore('sprites', { keyPath: 'id', autoIncreament: true });
                
                this.objectStore.createIndex('action', 'action', { unique: false });
                this.objectStore.createIndex('image', 'image', { unique: false });
                this.objectStore.createIndex('imageSrc', 'imageSrc', { unique: false });
                this.objectStore.createIndex('frameTotalCount', 'frameTotalCount', { unique: false });
    
                console.log("Upgraded to ", event.oldVersion, "to", event.newVersion);
                this.db_version++;
            };
            
            
        DB_request.onsuccess = (event) => {
            
            this.database = event.target.result;
            resolve(this.database);
            console.log('Database successfully created.', event.target.result);
        }

        DB_request.onerror = (event) => {
        
            reject('Database creation failed!', event.target.errorCode);
        } 

        });    
    }

    async addObjectToStorage(spriteData) {

        const database = await this.createStorage();

        return new Promise((resolve, reject) => {

            const transaction       = database.transaction(['sprites'], 'readwrite');
            const objectStore       = transaction.objectStore('sprites');
            const request           = objectStore.add(JSON.stringify(spriteData));

            request.onsuccess       = (event) => { resolve('Data has been added.', event); }
            request.onerror         = (event) => { reject(console.error('Unable to add data.', event.target.errorCode)); }

            transaction.onsuccess   = (event) => { console.error('Transaction succeeded.', event); }
            transaction.onerror     = (event) => { console.error('Transaction failed.', event); }

        });
        

    }

    async getDataFromStorage(id) {

        const database = await this.createStorage();

        return new Promise((resolve, reject) => {

            const transaction       = database.transaction(['sprites'], 'readonly');
            const objectStore       = transaction.objectStore('sprites');
            const request           = objectStore.get(id);

            request.onsuccess       = (event) => { resolve(event.target.result); }
            request.onerror         = (event) => { reject(console.error('No data found.', event.target.errorCode)); }

            transaction.oncomplete  = (event) => { console.log('Transaction succeeded.', event.target.result); }
            transaction.onerror     = (event) => { console.error('Transaction failed.', event.target.errorCode); }
        });
    }

    async deleteDataFromStorage(id) {

        const database = await this.createStorage();

        return new Promise((resolve, reject) => {

            const transaction       = database.transaction(['sprites'], 'readwrite');
            const objectStore       = transaction.objectStore('sprites');
            const request           = objectStore.delete(id);
        
            request.onsuccess = (event) => { resolve(console.log('Data deletion succeeded.', event.target.result)); }
            request.onerror   = (event) => { reject(console.error('Data deletion failed.', event.target.errorCode)); }

            transaction.oncomplete  = (event) => { console.log('Transaction succeeded.', event.target.result); }
            transaction.onerror     = (event) => { console.error('Transaction failed.', event.target.errorCode); }

        });
    }

    async deleteDataStorage() {

        return new Promise((resolve, reject) => {

            const request = window.indexedDB.deleteDatabase(this.db_name);

            request.onsuccess   = (event) => { resolve(console.log('Database successfully deleted.', event.target.result)); }
            request.onerror     = (event) => { reject(console.error('Unable to delete database.', event.target.errorCode)); }
            request.onblocked   = (event) => { reject(console.error('Data is blocked. Unable to delete database.', event.target.errorCode)); }
        });
    }
}            

