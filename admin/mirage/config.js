export default function() {
  this.namespace = '/api';

  this.get('/products', function() {
    return {
      data: [{
        "id": 5,
        "name": "Зефир",
        "description": "Вкусный, сладкий и приятный!",
        "price": "6.99",
        "photo": "https://cdnimg.webstaurantstore.com/images/products/large/441724/1761293.jpg",
        "created_at": "2019-11-01T23:23:16.000Z",
        "updated_at": "2019-11-01T23:23:18.000Z",
        "available": "1.0"
      }, {
        "id": 6,
        "name": "Шарф. Новый год 2020!",
        "description": "Согрей себя в холодные зимние дни!",
        "price": "12.99",
        "photo": "https://www.aftcra.com/uploads/cache/products/1/1/11-13-2010ebaycharismaredinfinityscarfcustometsy2010-11-13_16-02-28_28540_101354_579x.jpg",
        "created_at": "2019-11-02T13:10:22.000Z",
        "updated_at": "2019-11-02T13:10:23.000Z",
        "available": "1.0"
      }, {
        "id": 7,
        "name": "Шапка. Новый год 2020!",
        "description": "На улице холодно, а тебе всегда тепло!",
        "price": "9.99",
        "photo": "http://nidosrojus.lt/wp-content/uploads/2016/02/IMG_6729-800x1000.jpg",
        "created_at": "2019-11-02T13:12:47.000Z",
        "updated_at": "2019-11-02T13:12:48.000Z",
        "available": "1.0"
      }, {
        "id": 4,
        "name": "Носки. Новый год 2020!",
        "description": "Красивые, теплые, шерстяные и просто замечательные!",
        "price": "5.99",
        "photo": "https://cdn.notonthehighstreet.com/fs/79/16/a258-a78f-476a-ac4b-88a2aa5a5694/original_handmade-wool-socks.jpg",
        "created_at": "2019-11-01T21:30:36.000Z",
        "updated_at": "2019-11-01T21:30:37.000Z",
        "available": "5.0"
      }]
    }
  });
}
