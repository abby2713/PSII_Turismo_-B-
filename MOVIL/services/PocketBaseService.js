import PocketBase from 'pocketbase'

class PocketBaseService{
    // Crea una instancia de PocketBase con la URL de la API
    static pb = new PocketBase('https://magnificent-painter.pockethost.io')

    // Función para obtener las categorías de la base de datos
    static async getCategories(menuItems){
      // Obtiene las categorias creadas
      let records = await this.pb.collection('category').getFullList({
          sort: '-created',
      });
  
      // Filtra las categorias que no estén activas
      records = records.filter((record) => {
        return record.status
      })
  
      // Obtiene los iconos de las categorias
      records = records.map((record) => {
  
        // Obtiene el icono de la categoria
        let icon = menuItems.find((item) => item.title.toLowerCase() === record.name.toLowerCase()).icon;
  
        // Si no encuentra el icono, le asigna el icono por defecto
        return {
          ...record,
          icon: icon !== null ? icon : faEllipsis,
        }
      })
  
      // Retorna las categorias
      return records;
  }

  static async getLocationsByCategory(categoryId) {
    let url = 'https://magnificent-painter.pockethost.io/api/files/';
    
    let records = await this.pb.collection('location').getFullList({
      sort: '-created',
    })

    records = records.filter((record) => {
      if (!categoryId) return record.status == "active"
      // Comprueba si el lugar tiene una categoría y si coincide con la categoría buscada
      return record.status == "active" && record.category_id.includes(categoryId);
    });

    records = records.map((record) => { 
      return {
        ...record,
        // url del backend + id de la coleccion + id del registro + nombre de la imagen
        image: record.photos ? url + record.collectionId + "/" + record.id + "/" + record.photos[0] : null,
      }
    })

    return records;
  }

  //Funcion para obtener los lugares favoritos en la base de datos de una lista con los id de los lugares
  static async getFavorites(favorites) {
    let url = "https://magnificent-painter.pockethost.io/api/files/";
    // Obtiene las categorias creadas
    let records = await this.pb.collection("location").getFullList({});
    records = records.filter((record) => {
      return favorites.includes(record.id);
    });
    records = records.map((record) => {
      return {
        ...record,
        // url del backend + id de la coleccion + id del registro + nombre de la imagen
        image: record.photos
          ? url + record.collectionId + "/" + record.id + "/" + record.photos[0]
          : null,
      };
    });

    return records;
  }
}

export default PocketBaseService