const DB_NAME = 'carrinho'
const DB_VERSION = 1
let DB

export default {

    async getDB(){
        return new Promise((resolve, reject) =>{
            if (DB) { return resolve(DB) }
            console.log('Abrindo banco DB', DB)
            let request = window.indexedDB.open(DB_NAME, DB_VERSION)

            request.onerror = e => {
                console.log('Erro ao abrir db', e)
                reject('Error')
            }

            request.onsuccess = e => {
                DB = e.target.result
                resolve(DB)
            }

            request.onupgradeneeded = e => {
                console.log('onupgradeneeded')
                let db = e.target.result
                db.createObjectStore('carrinho', { autoIncrement: true, keyPath: 'id' })
            }
        })
    },

    async getItem(table){
        console.log('getitem')
        let db = await this.getDB()
        
        return new Promise(resolve => {

            let trans = db.transaction([table], 'readonly')
            trans.oncomplete = () => {
                resolve(items)
            }

            let store = trans.objectStore(table)
            let items = []

            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                  items.push(cursor.value)
                  cursor.continue()
                }
              }
        })
    },

    async saveItem(item, table){
        console.log('saveitem')
        let db = await this.getDB()

        return new Promise(resolve => {
            let trans = db.transaction([table], 'readwrite')
            trans.oncomplete = () => {
                resolve()
            };

            let store = trans.objectStore(table)
            store.put(item)
        })
    }

    
}