export abstract class Repository<T> {
    public schema?: string; // name of Mongoose schema
    
    public xlChunk: T[] = []; // fragment
    public chunkCurrentPart: number = 0; // current paging state for fragment
    public chunkSortBy: string = "_id"; // current sort by for fragment
    public chunkSortDir: number = 1; // current sort direction for fragment    
    public chunkLength: number = 10; // current length of fragment
    protected chunkLoadedAt: number = 0; // last load timestamp for fragment loading

    public xlFull: T[] = []; // all objects
    public fullSortBy: string = "_id"; // current sort by for all objects
    public fullSortDir: number = 1; // curent sort direction for all objects        
    protected fullLoadedAt: number = 0; // last load timestamp for full loading    
    public fullLength: number = 0; // quantity of all objects in table    

    protected ttl: number = 1000*30; // time to live = 30 sec

    public invalidateChunk(): void {        
        this.chunkLoadedAt = 0;
    }
    
    public invalidateFull(): void {
        this.fullLoadedAt = 0;
    }

    public invalidateAll(): void {
        this.chunkLoadedAt = 0;
        this.fullLoadedAt = 0;
    }    
}
