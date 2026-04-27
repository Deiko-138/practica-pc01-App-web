export class Category {
    static toEntityFromResponse(Resource) {
        return new Category({...resource});
    }

    static toEntityFromResponse(response) {
        if(response.status !== 200){
            console.error(`${response.status} - ${response.statusText}`);
            return[];
        }
        let resources = response.data instanceof Array
        ? response.data : response.data['categories'];
        return resources.map(resources => this.toEntityFromResponse(resources));
    }
}